import { useState } from "react";
import { updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuth } from "../AuthContext";

export default function Settings() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function saveName(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!name.trim()) return setError("Enter your name.");

    setSaving(true);
    try {
      await updateProfile(auth.currentUser, { displayName: name.trim() });
      await updateDoc(doc(db, "users", user.uid), { name: name.trim() });
      setMessage("Name updated.");
    } catch (err) {
      console.error(err);
      setError("Could not save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function resetPassword() {
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, user.email);
      setMessage(`Password reset email sent to ${user.email}.`);
    } catch (err) {
      console.error(err);
      setError("Could not send the reset email. Please try again.");
    }
  }

  return (
    <main className="page">
      <div className="wrap auth-wrap">
        <form className="auth-card" onSubmit={saveName} noValidate>
          <h1 className="page-title">Settings</h1>

          <label className="label-col">
            Name
            <input
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>

          <label className="label-col">
            Email
            <input className="field" value={user.email} disabled />
          </label>

          {error && <p className="form-error" role="alert">{error}</p>}
          {message && <p className="muted center">{message}</p>}

          <button type="submit" className="btn solid block" disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </button>

          <p className="muted center">
            <button type="button" className="link-btn" onClick={resetPassword}>
              Send me a password reset email
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}