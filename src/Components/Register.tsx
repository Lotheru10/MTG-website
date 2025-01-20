import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

interface RegisterProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Hasła muszą być takie same!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some(
      (user: { username: string }) => user.username === username
    );

    if (userExists) {
      alert("Użytkownik o tej nazwie już istnieje!");
      return;
    }
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Rejestracja zakończona sukcesem!");

    localStorage.setItem("loggedInUser", username);
    setIsLoggedIn(true);

    navigate("/home");
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Rejestracja</h1>
      <form onSubmit={handleRegister}>
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
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Potwierdź hasło:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Zarejestruj się
        </button>
      </form>
      <div className={styles.loginPrompt}>
        <p>Masz już konto?</p>
        <button onClick={() => navigate("/")} className={styles.registerButton}>
          Zaloguj się
        </button>
      </div>
    </div>
  );
};

export default Register;
