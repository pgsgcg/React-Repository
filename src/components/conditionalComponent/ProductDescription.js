import React from "react";

function ProductDescription(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

ProductDescription.defaultProps = {
    name: "Shoe",
    description: "Campus mens Oxyfit (N) Walking Shoe",
    price: 740,
  };

export default ProductDescription;