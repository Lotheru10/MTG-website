import React, { useState } from "react";
import Button1 from "./Button1";
import dragonImage from "../assets/dragon.png";
import "./css/Card.css";
interface CardProps {
  imageUrl: string;
  name: string;
  onAddToDeck: (cardName: string) => void;
}
const Card: React.FC<CardProps> = ({ imageUrl, name, onAddToDeck }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={name} className="card-image" />
      <button className="add-button" onClick={() => onAddToDeck(name)}>
        Dodaj do talii
      </button>
      <p className="card-name">{name}</p>
    </div>
  );
};
export default Card;
