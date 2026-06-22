import { useState } from "react";
import "./AdminLogin.css";

const AdminLogin = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const goHome = () => {
    if (onNavigate) {
      onNavigate("/");
      return;
    }

    window.location.href = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("Please wait...");

    try {
      const response = await fetch(
        "https://mini-crm-backend-5uyg.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Invalid email or password.");
        return;
      }

      localStorage.setItem("token", data.token);

      setMessage("Login successful!");

      if (onNavigate) {
        onNavigate("/dashboard");
      } else {
        window.location.href = "/dashboard";
      }

    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server.");
    }
  };

  return (
    <section className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-header">
          <p className="admin-login-kicker">ADMIN ACCESS</p>
          <h2>Mini CRM</h2>
          <p className="admin-login-text">
            Sign in to access the CRM dashboard.
          </p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>

          <label className="admin-login-field">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="admin-login-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {message && (
            <p className="admin-login-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="admin-login-button"
          >
            Login
          </button>

        </form>

        <button
          type="button"
          className="admin-login-back"
          onClick={goHome}
        >
          Back to Home
        </button>

      </div>
    </section>
  );
};

export default AdminLogin;