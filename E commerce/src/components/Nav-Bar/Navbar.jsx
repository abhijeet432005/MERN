import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { lazy, useRef, useState } from "react";
import { Links, NavLink, useNavigate } from "react-router-dom";
const Cart = lazy(() => import('../cart/Cart'))
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  const cartData = useSelector((state) => state.cartSlice.cart);
  const navigate = useNavigate();
  const NavRef = useRef(null);
  const CartRef = useRef(null);
  const cartOpenRef = useRef(null);
  const linkRef = useRef([]);
  const [open, setopen] = useState(false);
  const menu = [
    { link: "Home", path: "/" },
    { link: "shop", path: "/shop" },
    { link: "about", path: "/about" },
    { link: "contact", path: "/contact" },
  ];
  const tl = useRef(null);
  const cart = useRef(null);

  useGSAP(() => {
    gsap.set(NavRef.current, { xPercent: 100 });
    gsap.set(CartRef.current, { xPercent: 100 });
    gsap.set(linkRef.current, {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(NavRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power4.out",
      })
      .to(
        linkRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

    cart.current = gsap.timeline({ paused: true }).to(CartRef.current, {
      xPercent: 0,
    });
  });

  const toggelMenu = () => {
    if (open) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setopen(!open);
  };

  const toggelCart = () => {
    if (open) {
      cart.current.reverse();
    } else {
      cart.current.play();
    }
    setopen(!open);
  };
  return (
    <div className="md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8">
      <nav
        ref={NavRef}
        className="fixed z-50 right-0 top-0 h-screen bg-black w-full md:w-1/2  text-white flex  flex-col items-end"
      >
        <div
          onClick={toggelMenu}
          className="lg:w-[8vw] lg:h-[14vh] w-[10vh] h-[12vh] relative overflow-hidden m-2"
        >
          <div className="h-64 w-0.5 bg-white absolute origin-top left-0 -rotate-48"></div>
          <div className="h-64 w-0.5 bg-white absolute origin-top right-0 rotate-48 "></div>
        </div>

        <div className="flex flex-col w-full mt-18 font-2 p-8 transition-all duration-300 gap-y-5">
          {menu.map((elem, index) => (
            <div
              key={index}
              ref={(el) => (linkRef.current[index] = el)}
              className="text-7xl lg:text-8xl tracking-wider  w-full lg:text-start text-center  uppercase text-gray-300 hover:text-white transition-all duration-300 font-medium"
            >
              <NavLink
                onClick={toggelMenu}
                className=" text-gray-300 hover:text-white transition-all duration-300"
                to={`${elem.path}`}
              >
                {elem.link}
              </NavLink>
            </div>
          ))}
        </div>
      </nav>

      <div
        ref={CartRef}
        className="fixed z-99 shadow-2xl cursor-default top-0 right-0 bg-white lg:w-1/3 w-full h-full"
      >
        <Cart toggelCart={toggelCart} />
      </div>

      <div className="w-full font-[font-1] flex justify-between items-center text-gray-700">
        <div onClick={() => navigate("/")}>
          <h1 className="text-pretty"><span className="text-xl">A</span>apki<span className="text-xl">D</span>ukkan.</h1>
        </div>

        <div className="flex gap-x-4 items-center cursor-default uppercase">
          Cart
          <div
            onClick={toggelCart}
            className="w-8 h-8 p-5 border-dotted  border-2 border-gray-600  rounded-full flex items-center justify-center"
          >
            {user ? (
              <div>
                {Array.isArray(cartData?.products) &&
                  cartData.products.length > 0 &&
                  cartData?.products.length}
              </div>
            ) : (
              "0"
            )}
          </div>
          <div
            onClick={toggelMenu}
            className="w-12 h-12 p-5 bg-black rounded-full flex flex-col gap-y-1.5 justify-center items-center"
          >
            <div className="h-2 w-8 bg-white"></div>
            <div className="h-2 w-8 bg-white"></div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between border-y mt-3 items-center h-15 text-black text-pretty font-[font-1]">
        <div className="" onClick={() => navigate("/shop")}>
          Shop
        </div>

        <div className="text-center w-[40vw] h-full flex justify-between items-center">
          <div className="h-full w-px bg-black"></div>
          <p className="text-gray-400  text-[0.9rem] hidden lg:block">
            40% Discount to all our Summer Collection!{" "}
            <span className="text-black">Discover more now</span>
          </p>
          <div className="h-full w-px bg-black"></div>
        </div>

        <div className="">
          {user ? (
            <button
              onClick={() =>
                navigate(`/userDetail/${user.id}/${user.username}`)
              }
              className="bg-black text-white px-3 py-1 text-sm rounded-md"
            >
              Account
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-3 py-1 text-sm rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
