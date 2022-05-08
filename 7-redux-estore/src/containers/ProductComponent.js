import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col } from "reactstrap";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const selected = useSelector((state) => state.selected.selected);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    if(category === selected)
    {
      return (
        <Col sm="4" style={{marginBottom: '10px'}} key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      );
    }   
  });
  return <>{renderList}</>;
};

export default ProductComponent;
