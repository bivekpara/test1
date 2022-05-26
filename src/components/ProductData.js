import React from "react";

export const ProductData = (props) => {
  return (
    <div>
      Title is {props.product.title}
      <img src={props.product.image} width="300px" height="300px" />
    </div>
  );
};
