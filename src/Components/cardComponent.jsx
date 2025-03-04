import React from "react";
import "../index.css";

function Card({ data, setSelectedImage }) {
  const handleClick = () => {
    console.log("Image clicked:", data);
    setSelectedImage(data);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{data.title}</h3>
      <div className="div-img">
        <img
          src={data.images[0]}
          alt={data.title}
          width={150}
          height={150}
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    </div>
  );
}

export default Card;
