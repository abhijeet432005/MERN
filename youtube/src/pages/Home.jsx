import React from "react";
import Nav from "../components/Navbar/Nav";
import Top from "../components/navbar/Top";
import { Outlet } from "react-router-dom";
import Feed from "../components/Feed/Feed";

const Home = () => {
  return (
    <div className="w-full relative">
      <Top />
      <div className="flex">
        <div className="border-gray-200 min-w-max">
          <Nav />
        </div>
        <Feed />
      </div>
    </div>
  );
};

export default Home;