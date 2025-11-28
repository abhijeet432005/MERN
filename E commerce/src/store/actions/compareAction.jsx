import { loadCompare } from "../reducers/compareSlice";

export const initCompare = () => (dispatch) => {
  const stored = JSON.parse(localStorage.getItem("compareItems"));
  if (stored) {
    dispatch(loadCompare(stored));
  }
};

export const addCompare = (product) => (dispatch, getState) => {
  const items = getState().compareSlice.compareItems;

  if (items.some((p) => p.id === product.id)) {
    return { type: "EXISTS" };
  }

  if (items.length >= 2) {
    return { type: "MAX" };
  }

  const updated = [...items, product];

  localStorage.setItem("compareItems", JSON.stringify(updated));
  dispatch(initCompare())
  return { type: "ADDED" };
};