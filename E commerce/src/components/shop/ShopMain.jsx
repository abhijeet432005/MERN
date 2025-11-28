import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "../../API/AxiosConfig";
import { clearProduct, loadProduct } from "../../store/reducers/productSlice";
import UseInfiniteScroll from "../../utils/UseInfiniteScroll";
const ProductCard = lazy(() => import("./ProductCard"));
import InfiniteScroll from "react-infinite-scroll-component";
import DropDownMenu from "./DropDownMenu";
import { useNavigate } from "react-router-dom";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useLenis } from "lenis/react";

const ShopMain = () => {
  const lenis = useLenis()
  const compareItems = useSelector((state) => state.compareSlice.compareItems);
  const [Comparenum, setComparenum] = useState(0);

  useEffect(() => {
    setComparenum(compareItems.length);
  }, [compareItems]);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
    // window.scrollTo(0, 0);
  }, [])

  const { product, fetchCatProduct, fetchProduct, hasMore, category } =
    UseInfiniteScroll();
  const SearchBarRef = useRef(null);
  const navigate = useNavigate();
  const [SearchOpen, setSearchOpen] = useState(false);
  const [input, setinput] = useState("");
  const [isSearching, setisSearching] = useState(false);
  const dispatch = useDispatch();
  const tl = useRef(null);

  //   useEffect(() => {
  //     console.log("👉 Shop MOUNTED");

  //     return () => {
  //       console.log("❌ Shop UNMOUNTED");
  //     };
  //   }, []);

  const fetch = async () => {
    try {
      const { data } = await axios.get(`/products/search?q=${input}`);
      console.log(data);
      dispatch(clearProduct());
      dispatch(loadProduct(data?.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim() !== "") {
        setisSearching(true);
        fetch();
      } else {
        setisSearching(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.set(SearchBarRef.current, { autoAlpha: 0, x: -30 });

    tl.current = gsap.timeline({ paused: true }).to(SearchBarRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.4,
      ease: "back.out",
    });

    gsap.from(".heading-1", {
      y: 80,
      duration: 1,
      opacity: 0,
      ease: "back.out",
    });
  });
  const toggle = () => {
    if (SearchOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }

    setSearchOpen(!SearchOpen);
  };

  const render = product.map((product) => (
    <Suspense
      key={product.id}
      fallback={
        <ProductCardSkeleton  />
      }
    >
      <ProductCard product={product} />
    </Suspense>
  ));
  return (
    <div className="mt-35 overflow-hidden md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8">
      <div className="font-[font-1]">
        <div className="flex w-full justify-between items-end flex-wrap gap-8">
          <h1 className="heading-1 text-[9vh] md:text-[10vh] whitespace-nowrap lg:text-[12vw]  leading-[11vw] ">
            Shop now
          </h1>
          <button
            onClick={() => navigate("/compare")}
            className="px-2 py-2 bg-gray-300/50 hover:bg-transparent hover:text-black transition-all duration-300  font-[font-1] tracking-wider border border-gray-200"
          >
            Compare{" "}
            <sup className="border border-dashed rounded-full px-2 py-1">
              {Comparenum}
            </sup>
          </button>
        </div>

        <div className="absolute z-10 -top-30 right-10 md:right-15 flex gap-1.5 items-center flex-row-reverse">
          <div
            onClick={toggle}
            className="flex items-center justify-center w-8 h-8 border rounded-full"
          >
            <BiSearch />
          </div>

          <div
            ref={SearchBarRef}
            className="lg:w-[15vw] w-[23vh] shrink-0 h-8 border rounded-full flex items-center p-2"
          >
            <form onSubmit={SubmitHandler}>
              <input
                type="text"
                value={input}
                placeholder="Search Here"
                onChange={(e) => setinput(e.target.value)}
                className="w-full h-full outline-0"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-18 ">
        <DropDownMenu />
      </div>

      <InfiniteScroll
        dataLength={product.length}
        next={category == null ? fetchProduct : fetchCatProduct}
        hasMore={isSearching ? false : hasMore}
        scrollThreshold={0.7}
        loader={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }
        endMessage={
          <p
            style={{ textAlign: "center" }}
            className="text-center text-xl mt-4 mb-4 animate-pulse text-gray-400"
          >
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.length === 0 &&
            Array.from({ length: 12 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}

          {product.length > 0 && render}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ShopMain;
