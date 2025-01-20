import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some(
      (user: { username: string; password: string }) =>
        user.username === username && user.password === password
    );

    if (userExists) {
      localStorage.setItem("loggedInUser", username);
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Nieprawidłowa nazwa użytkownika lub hasło.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Logowanie</h1>
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Hasło:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Zaloguj się
        </button>
      </form>
      <div className={styles.loginPrompt}>
        <p>Nie masz konta?</p>
        <button
          onClick={() => navigate("/register")}
          className={styles.registerButton}
        >
          Zarejestruj się
        </button>
      </div>
    </div>
  );
};

export default Login;
