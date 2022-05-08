import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const setCategories = (category) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: category,
  };
};
export const selectedCategory = (selected) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: selected,
  };
};