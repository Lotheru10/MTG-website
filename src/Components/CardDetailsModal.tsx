import React, { useState } from "react";
import "./css/Modal.css";

interface CardDetailsModalProps {
  card: {
    name: string;
    imageUrl: string;
    rarity: string;
    type: string;
    color: string;
    price: string;
  } | null;
  onClose: () => void;
}

interface Opinion {
  username: string;
  text: string;
}

const CardDetailsModal: React.FC<CardDetailsModalProps> = ({
  card,
  onClose,
}) => {
  const [opinion, setOpinion] = useState("");
  const [opinionsList, setOpinionsList] = useState<Opinion[]>([]);

  if (!card) return null;

  const handleOpinionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpinion(event.target.value);
  };

  const handleAddOpinion = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (opinion.trim() !== "" && loggedInUser) {
      setOpinionsList((prevOpinions) => [
        ...prevOpinions,
        { username: loggedInUser, text: opinion },
      ]);
      setOpinion("");
    } else if (!loggedInUser) {
      alert("Musisz być zalogowany, aby dodać opinię.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal-image" />
        <h2>{card.name}</h2>
        <p>
          <strong>Rarity:</strong> {card.rarity}
        </p>
        <p>
          <strong>Type:</strong> {card.type}
        </p>
        <p>
          <strong>Color:</strong> {card.color}
        </p>
        <p>
          <strong>Price:</strong> {card.price}
        </p>

        <div className="opinion-section">
          <input
            type="text"
            value={opinion}
            onChange={handleOpinionChange}
            placeholder="Dodaj opinię..."
          />
          <button onClick={handleAddOpinion}>Dodaj opinię</button>
        </div>

        <div className="opinions-list">
          {opinionsList.length > 0 ? (
            <ul>
              {opinionsList.map((opinion, index) => (
                <li key={index}>
                  <strong>{opinion.username}:</strong> {opinion.text}
                </li>
              ))}
            </ul>
          ) : (
            <p>Brak opinii na ten moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetailsModal;
