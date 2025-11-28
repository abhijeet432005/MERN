import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../pages/Categories";
const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Login = lazy(() => import("../pages/User/Login"));
const ProductDetailPage = lazy(() => import("../components/shop/ProductDetailPage"));
const CompareProduct = lazy(() => import("../pages/CompareProduct"));
const OrderPage = lazy(() => import("../pages/OrderPage"));
const AuthRoutes = lazy(() => import("./AuthRoutes"));
const UserDetail = lazy(() => import("../pages/User/UserDetail"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />}>
        <Route path="/shop/product/:id/:name" element={<ProductDetailPage />} />
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/compare" element={<CompareProduct />} />
      <Route path="/category/:cat" element={<Categories />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/orderPage" element={<AuthRoutes><OrderPage /></AuthRoutes>} />
      <Route path="/userDetail/:id/:username" element={<AuthRoutes><UserDetail /></AuthRoutes>} />
    </Routes>
  );
};

export default MainRoutes;
