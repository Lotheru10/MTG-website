import React, { useState } from "react";
import "./css/Form.css";
import emailjs from "emailjs-com";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Wysyłanie e-maila za pomocą EmailJS
    emailjs
      .send(
        "service_au5zsli", // Twój Service ID
        "template_zf1e4cw", // Twój Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "du_Ee_quRVtwA1_LK" // Twój Public Key
      )
      .then(
        (result) => {
          alert("Formularz wysłany pomyślnie!");
          console.log(result.text);
        },
        (error) => {
          alert("Błąd podczas wysyłania formularza.");
          console.error(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Formularz kontaktowy</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Wiadomość:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default Form;
