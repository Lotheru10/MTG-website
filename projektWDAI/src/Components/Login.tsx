import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css"; // Importowanie modułu CSS

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const mockUsers = [
      { username: "1", password: "1" },
      { username: "user2", password: "password2" },
    ];
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", username);
      setIsLoggedIn(true);
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Logowanie</h1>
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label>Nazwa użytkownika:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Hasło:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Zaloguj
        </button>
      </form>
      <div>
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
