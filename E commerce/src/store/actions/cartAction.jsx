import axios from "../../API/AxiosConfig";
import { loadCart } from "../reducers/cartSlice";

export const asyncGetCart = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/carts/user/${userId}`);
    let cart = data.carts?.[0];


    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(loadCart(cart));

  } catch (error) {
    console.log("Cart Fetch Error:", error);
  }
};

export const AddCartItem = ({ userId, productId }) => async (dispatch, getState) => {
  try {
    const currentCart = getState().cartSlice.cart;
    let updatedProducts = currentCart?.products ? [...currentCart.products] : [];

    const index = updatedProducts.findIndex(p => p.id === productId);

    if (index === -1) {
      updatedProducts.push({ id: productId, quantity: 1 });
    } else {
      updatedProducts[index] = {
        id: productId,
        quantity: updatedProducts[index].quantity + 1
      }
    }

    let data;

    if (currentCart?.id) {
      // Update existing cart
      const res = await axios.put(`/carts/${currentCart.id}`, {
        merge: true,
        products: updatedProducts,
      });
      data = res.data;
    } else {
      const res = await axios.post("/carts/add", {
        userId,
        products: updatedProducts,
      });
      data = res.data;
    }

    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(loadCart(data));

  } catch (error) {
    console.log("Add to Cart Error:", error);
  }
};

export const IncCartQnty = (productId) => async (dispatch, getState) => {
  try {
    const cart = getState().cartSlice.cart;
    if (!cart?.id) return;

    let updatedProducts = cart.products.map((p) =>
      p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
    );

    const { data } = await axios.put(`/carts/${cart.id}`, {
      merge: true,
      products: updatedProducts,
    });

    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(loadCart(data));
    console.log(data)

  } catch (error) {
    console.log(error)

  }
}
export const DecCartQnty = (productId) => async (dispatch, getState) => {
  try {
    const cart = getState().cartSlice.cart;
    if (!cart?.id) return;

    let updatedProducts = cart.products
      .map((p) => {
        if (p.id === productId) {
          const newQty = p.quantity - 1;
          return newQty > 0 ? { ...p, quantity: newQty } : null;
        }
        return p;
      })
      .filter(Boolean)

    const { data } = await axios.put(`/carts/${cart.id}`, {
      merge: true,
      products: updatedProducts,
    });

    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(loadCart(data));
    console.log(data)

  } catch (error) {
    console.log(error)

  }
}