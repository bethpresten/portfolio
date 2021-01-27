import React from "react";

const Card = ({ title, link, image, description, alt }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="{link}" className="btn btn-primary">
            Github Repo
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
