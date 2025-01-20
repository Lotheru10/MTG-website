import React, { useState } from "react";
import "./css/Modal.css";

interface CardDetailsModalProps {
  card: {
    name: string;
    imageUrl: string;
  } | null;
  onClose: () => void;
}

const CardDetailsModal: React.FC<CardDetailsModalProps> = ({
  card,
  onClose,
}) => {
  const [opinion, setOpinion] = useState(""); // Stan do przechowywania opinii
  const [opinionsList, setOpinionsList] = useState<string[]>([]); // Lista opinii

  if (!card) return null;

  const handleOpinionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpinion(event.target.value);
  };

  const handleAddOpinion = () => {
    if (opinion.trim() !== "") {
      setOpinionsList((prevOpinions) => [...prevOpinions, opinion]);
      setOpinion(""); // Wyczyść pole po dodaniu opinii
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

        {/* Formularz do dodania opinii */}
        <div className="opinion-section">
          <input
            type="text"
            value={opinion}
            onChange={handleOpinionChange}
            placeholder="Dodaj opinię..."
          />
          <button onClick={handleAddOpinion}>Dodaj opinię</button>
        </div>

        {/* Wyświetlanie opinii */}
        <div className="opinions-list">
          {opinionsList.length > 0 ? (
            <ul>
              {opinionsList.map((opinion, index) => (
                <li key={index}>{opinion}</li>
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
