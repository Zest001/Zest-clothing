import React from "react";
// import "../Collection-item/collection-item.scss";
import "../Collection-item/Collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <div className="price">Rs. {price} </div>
      </div>
    </div>
  );
};

export default CollectionItem;
