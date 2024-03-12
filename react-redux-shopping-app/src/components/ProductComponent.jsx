import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProductsReducer.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div className="productContainer" key={id}>
        <Link to={`/product/${id}`} className="productLink">
          <div class="ui card" id="productCard">
            <div className="productImage">
              <img src={image} alt={title} />
            </div>
            <div className="productInfo">
              <div className="productName">{title}</div>
              <div className="productPrice">$ {price}</div>
              <div className="productCategory">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
