import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCategory,
  setCategories,
} from "../redux/actions/productsActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import Loader from "./Loader";
export default function CategoryList() {
  const categories = useSelector((state) => state.category.categories);
  
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCategories(response.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ListGroup>
        {categories ? (
          categories.map((item) => (
            <ListGroupItem action tag="button" key={item} onClick={()=>dispatch(selectedCategory(item))}>
              {item}
            </ListGroupItem>
          ))
        ) : (
         <Loader/>
        )}
      </ListGroup>
    </div>
  );
  // {categories.map(item =><div> {item} </div>)}
}
