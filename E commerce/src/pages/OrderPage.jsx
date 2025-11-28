import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";

const OrderPage = () => {
  const cartData = useSelector(state => state.cartSlice.cart);
  const navigate = useNavigate();
  
  const successRef = useRef(null);
  const cardRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(successRef.current, {
      scale: 0,
      duration: 0.7,
      ease: "back.out(1.7)"
    }).from(cardRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: 0.3
    }, "+=0.5")
  }, []);

  if (!cartData?.products) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] font-[font-3]">
        No Items Found in Cart! 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 font-[font-1]">
      
      {/* Success Animation */}
      <div ref={successRef} className="text-green-600 text-6xl mb-3">
        ✔️
      </div>

      <h1 className="text-3xl md:text-4xl font-[font-3] bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
        Order Successfully Placed!
      </h1>

      <p className="text-gray-500 mt-1 mb-6">
        Order ID: <span className="font-semibold">{cartData.id || "TEMP-62738"}</span>
      </p>

      {/* Order Card */}
      <div
        ref={cardRef}
        className="w-full md:w-[60%] backdrop-blur-xl bg-white/60 rounded-3xl shadow-xl p-6 border border-white/40"
      >
        <h2 className="text-[1.3rem] font-[font-3] mb-4 text-gray-700">
          📦 Ordered Products
        </h2>

        {cartData.products.map((prod, i) => (
          <div
            ref={(el) => itemsRef.current[i] = el}
            key={prod.id}
            className="flex items-center gap-3 mb-4 p-2 rounded-xl hover:bg-gray-100 transition"
          >
            <img
              src={prod.thumbnail}
              className="w-16 h-16 object-cover bg-white rounded-xl shadow"
              alt={prod.title}
            />
            <div>
              <p className="font-semibold text-gray-700">{prod.title}</p>
              <p className="text-gray-500 text-sm">
                {prod.quantity} × ${prod.price}
              </p>
            </div>
          </div>
        ))}

        <div className="border-t mt-5 pt-3 flex justify-between font-[font-3] text-gray-700">
          <p>Total Amount</p>
          <p>${cartData.total?.toFixed(2)}</p>
        </div>
      </div>

      {/* Back */}
      <NavLink
        to="/shop"
        className="mt-8 px-6 py-3 bg-black text-white rounded-full font-[font-1] tracking-wide hover:bg-gray-900 transition"
      >
        Continue Shopping 🛍️
      </NavLink>
    </div>
  );
};

export default OrderPage;