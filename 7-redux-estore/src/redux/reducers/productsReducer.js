import { ActionTypes } from "../constants/action-types";

export const productsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const categoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload};
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = {selected: 'electronics'} , { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return { selected: payload};
    default:
      return state;
  }
};