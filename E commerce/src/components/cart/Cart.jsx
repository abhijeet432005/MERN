import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetCart,
  DecCartQnty,
  IncCartQnty,
} from "../../store/actions/cartAction";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cart = ({ toggelCart }) => {
  const dispatch = useDispatch();
  // const { id, title } = product;
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartSlice.cart);
  const user = useSelector((state) => state.userSlice.user);


  
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between text-xl p-3 font-[font-1] shadow items-center text-gray-500">
        <p>Your Cart</p>

        <div onClick={toggelCart} className=" w-6 h-6 relative overflow-hidden">
          <div className="h-44 bg-black absolute origin-top -rotate-45 w-px"></div>
          <div className="h-44 bg-black absolute origin-top right-0 rotate-45 w-px"></div>
        </div>
      </div>

      <div>
        {user ? (
          <div className="font-[font-1] relative w-full">
            {Array.isArray(cartData?.products) &&
              cartData.products.length > 0 &&
              cartData?.products.map((prod) => (
                <div
                  key={prod.id}
                  className="w-full flex gap-2 items-center p-2"
                >
                  <div
                    className="lg:w-14 w-11 h-10 lg:h-12 border border-gray-400/60 rounded-full"
                    onClick={() => {
                      navigate(`/shop/product/${prod.id}/${prod.title}`);
                      toggelCart();
                    }}
                  >
                    <LazyLoadImage
                      src={`${prod.thumbnail}`}
                      alt="image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="w-full flex justify-between items-center font-[font-1]">
                    <div>
                      <p className="text-gray-800/70">{prod.title}</p>
                      <p className="text-gray-600/80 tracking-wider">
                        $ {prod.price}
                      </p>
                    </div>

                    <div className="flex gap-1 items-center mr-2">
                      <button onClick={() => dispatch(DecCartQnty(prod.id))}>
                        -
                      </button>
                      <p>{prod.quantity}</p>
                      <button onClick={() => dispatch(IncCartQnty(prod.id))}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            <div className="fixed bottom-4 border-t border-gray-400 w-full flex flex-col gap-2 p-3">
              <div className="flex w-full justify-between">
                <p>Subtotal</p>
                <p>$ {cartData?.total?.toFixed(2)}</p>
              </div>
              <div className="w-full">
                <button onClick={() => {navigate('/orderPage'); toggelCart()}} className="border-dashed border py-2 w-full rounded-2xl font-[font-3]">
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            Login To Add Item In Cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
