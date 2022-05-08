import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";
import Loader from "./Loader";
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const selected = useSelector((state) => state.selected.selected);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <Container style={{marginTop: '90px'}}>
      <Row>
        <Col sm="3">
          <CategoryList />
        </Col>
        <Col sm="9">
          <Row>
            <h1>{selected}</h1>
            {products ? <ProductComponent /> : <Loader/>}
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
