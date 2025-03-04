import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./cardComponent";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../index.css";

const producthData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Network not ok");
  }
  const data = await response.json();
  return data;
};

const Product = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: producthData,
  });


  if (isLoading) return <div><h1 className="load">Loading...</h1></div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="main-screen">
      <Navbar />
      <section>
        <div className="container">
          <div className="cards">
            {data?.products?.length > 0 ? (
              data.products.map((product) => {
                return (
                  <div className="card" key={product.id}>
                    <Card data={product} />
                  
                    <Link to="/image-details" state={{ selectedImage: product }}>
                      <button className="btn-details">View Details</button>
                    </Link>
                  </div>
                );
              })
            ) : (
              <p>No products</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;