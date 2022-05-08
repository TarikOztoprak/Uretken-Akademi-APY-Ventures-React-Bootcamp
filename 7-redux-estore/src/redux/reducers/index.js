import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, categoryReducer, selectedCategoryReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  category: categoryReducer,
  selected: selectedCategoryReducer
});
export default reducers;
