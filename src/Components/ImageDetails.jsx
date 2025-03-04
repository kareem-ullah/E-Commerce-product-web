import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch} from "react-redux";
import "../index.css";

function ImageDetailsPage() {
  const location = useLocation();
  const { selectedImage } = location.state || {};
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: selectedImage });
  };

  if (!selectedImage) {
    return <div>No image details available</div>;
  }

  return (
    <>
      <h3 className="title">{selectedImage.title}</h3>
      <div className="div-image">
        <img
          src={selectedImage.images[0]}
          alt={selectedImage.title}
          width={200}
          height={200}
        />
      </div>
      <div className="div-details">
        <div className="div-p">
          <span className="description">{selectedImage.description}</span>
          <p>Price: ${selectedImage.price}</p>
          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageDetailsPage;
