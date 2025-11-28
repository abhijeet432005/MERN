import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AddCartItem } from "../../store/actions/cartAction";
import { addCompare } from "../../store/actions/compareAction";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductCard = ({ product }) => {
  const CardRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, images, price, title } = product;
  const user = useSelector((state) => state.userSlice.user);
  const products = useSelector((state) => state.productsSlice.product);
  const singleProd = products.find((p) => p.id == id);

  useGSAP(() => {
    gsap.from(CardRef.current, {
      y: 50,
      duration: 0.5
    })
  })

  const CartHandler = () => {
    if (!user) {
      toast.error("Please login to add items in cart 🛒");
      navigate("/login");
      return
    }
    else{
      dispatch(AddCartItem({ userId: user.id, productId: id, qty: 1 }))
      toast.success("Added to cart 🛒");
    };
       
  };

  const CompareHandler = () => {
    const res = dispatch(addCompare(singleProd));
    if (res?.type === "EXISTS") {
      toast.info("Already added 👍");
    } else if (res?.type === "MAX") {
      toast.error("You can only compare 2 items!");
    } else if (res?.type === "ADDED") {
      toast.success("Added to compare 🎯");
    }
  };

  return (
    <div ref={CardRef} className="relative cursor-default">
      <div className="absolute flex gap-2 top-2 left-2">
        <button
          onClick={CartHandler}
          className="px-2 z-8 left-2 py-1.5 bg-gray-300/50 text-black rounded-3xl font-[font-1] text-[0.8rem]"
        >
          Add To Cart
        </button>

        <button
          onClick={CompareHandler}
          className="px-2 z-8 left-2 py-1.5 bg-gray-300/50 text-black rounded-3xl font-[font-1] text-[0.8rem]"
        >
          Add To Compare
        </button>
      </div>

      <NavLink
        to={`/shop/product/${id}/${title}`}
        className={` border cursor-default border-gray-300/40 bg-gray-200/5 rounded-3xl overflow-hidden p-4 flex flex-col items-start gap-y-4 font-[font-1]`}
      >
        <div className="w-full h-[48vh] overflow-hidden mt-8">
          <img
            src={images.length === 1 ? `${images[0]}` : `${images[1]}`}
            alt=""
            className="w-full h-[48vh] object-contain hover:scale-104 transition-all duration-500"
            loading="lazy"
          />
        </div>

        <div className="">
          <p>{title}</p>
          <p>＄{price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
