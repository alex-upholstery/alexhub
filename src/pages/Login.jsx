import { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const isRegister = mode === "register";
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email.includes("@"))
      return setError("Enter a valid email address.");
    if (form.password.length < 6)
      return setError("Password must be at least 6 characters.");
    if (isRegister && !form.name.trim()) return setError("Enter your name.");

    // TODO: call your auth API here.
    console.log(isRegister ? "register" : "login", form);
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

          <button type="submit" className="btn solid block">
            {isRegister ? "Create account" : "Log in"}
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
