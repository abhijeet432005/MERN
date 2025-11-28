import { Outlet, useLocation } from "react-router-dom";
import ShopMain from "../components/shop/ShopMain";
import { useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const location = useLocation();
  const isDetail = location.pathname.includes("/shop/product");

  const userData = async () => {
    try {
      const user = await axios.post("https://dummyjson.com/auth/login", {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      });
      // const user = await axios.post("https://dummyjson.com/users");

      console.log(user);

      const cart = await axios.get('https://dummyjson.com/carts/user/33')
      console.log(cart)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // userData();
  });


  return (
    <div className="relative">
      {/* Always rendered, only hidden on detail page */}
      <div style={{ display: isDetail ? "none" : "block" }}>
        <ShopMain />
      </div>

      {/* Detail page on top */}
      <Outlet />
    </div>


  );
};

export default Shop;
