import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase"; 

function friendlyError(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account with that email already exists.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Incorrect email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";
    case "auth/network-request-failed":
      return "Network error. Check your connection.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export default function Login() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isRegister = mode === "register";
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email.includes("@"))
      return setError("Enter a valid email address.");
    if (form.password.length < 6)
      return setError("Password must be at least 6 characters.");
    if (isRegister && !form.name.trim()) return setError("Enter your name.");

    setLoading(true);
    try {
      if (isRegister) {
        const cred = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        await updateProfile(cred.user, { displayName: form.name.trim() });

        // Save extra profile data in Firestore (never store the password)
        await setDoc(doc(db, "users", cred.user.uid), {
          name: form.name.trim(),
          email: form.email,
          createdAt: serverTimestamp(),
        });
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
      }
      // Success: redirect here, e.g. navigate("/dashboard")
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="wrap auth-wrap">
        <form className="auth-card" onSubmit={handleSubmit} noValidate>
          <h1 className="page-title">
            {isRegister ? "Create account" : "Log in"}
          </h1>

          {isRegister && (
            <label className="label-col">
              Name
              <input
                className="field"
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
              />
            </label>
          )}

          <label className="label-col">
            Email
            <input
              className="field"
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              autoComplete="email"
            />
          </label>

          <label className="label-col">
            Password
            <input
              className="field"
              type="password"
              name="password"
              value={form.password}
              onChange={update}
              autoComplete={isRegister ? "new-password" : "current-password"}
            />
          </label>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn solid block" disabled={loading}>
            {loading
              ? "Please wait..."
              : isRegister
              ? "Create account"
              : "Log in"}
          </button>

          <p className="muted center">
            {isRegister ? "Already have an account?" : "New here?"}{" "}
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                setMode(isRegister ? "login" : "register");
                setError("");
              }}
            >
              {isRegister ? "Log in" : "Create an account"}
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}