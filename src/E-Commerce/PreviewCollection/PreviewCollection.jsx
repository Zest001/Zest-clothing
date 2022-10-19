import React from "react";
import CollectionItem from "../Collection-item/Collection-Item.component";
import "../PreviewCollection/PreviewCollection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} {...otherCollectionProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
