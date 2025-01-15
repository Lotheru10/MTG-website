import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Sprawdzanie, czy hasło i potwierdzenie hasła są takie same
    if (password !== confirmPassword) {
      alert("Hasła muszą być takie same.");
      return;
    }

    // Sprawdzanie, czy użytkownik już istnieje
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (
      users.some((user: { username: string }) => user.username === username)
    ) {
      alert("Użytkownik o tej nazwie już istnieje.");
      return;
    }

    // Dodanie nowego użytkownika do localStorage
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Rejestracja zakończona sukcesem!");
    navigate("/login"); // Przekierowanie na stronę logowania po rejestracji
  };

  return (
    <div>
      <h1>Rejestracja</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
}

export default Register;
