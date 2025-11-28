import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getRelatedProducts,
  getSingleProduct,
} from "../../store/actions/productAction";
import ProductCard from "./ProductCard";
import { clearSinglePro } from "../../store/reducers/productSlice";
import { useLenis } from "lenis/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetailPage = () => {
  const lenis = useLenis()
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productsSlice.singleProduct);
  const relatedPro = useSelector((state) => state.productsSlice.relatedProduct);
  const [image, setimage] = useState("");

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    dispatch(clearSinglePro());
    dispatch(getSingleProduct(id));
  }, [id]);


  useEffect(() => {
    if (product && product.category) {
      dispatch(getRelatedProducts(product.category));
    }
  }, [product]);

  useEffect(() => {
    if (product?.images) {
      const defaultImage =
        product.images.length > 1 ? product.images[1] : product.images[0];

      setimage(defaultImage);
    }
  }, [product?.images]);

  const imageChange = (elem) => {
    setimage(elem);
  };

  // console.log(id)

  if (!product || !product.images || product.images.length === 0) {
    return (
      <div className="flex flex-col gap-y-10 animate-pulse md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8">
        <div className="mt-20 flex gap-8 flex-col md:flex-row">
          {/* Left - Image Skeleton */}
          <div>
            <div className="shadow-md bg-gray-200/60 md:w-[45vw] md:h-[65vh] rounded-md" />
            <div className="flex gap-2 mt-4">
              <div className="w-[20vw] h-[10vh] bg-gray-200/60 rounded-md" />
              <div className="w-[20vw] h-[10vh] bg-gray-200/60 rounded-md" />
              <div className="w-[20vw] h-[10vh] bg-gray-200/60 rounded-md" />
            </div>
          </div>

          {/* Right - Text Skeleton */}
          <div className="font-[font-1] w-full md:w-[40vw] flex flex-col gap-4">
            <div className="h-10 bg-gray-200/60 rounded-md w-3/4" />
            <div className="h-6 bg-gray-200/60 rounded-md w-full" />
            <div className="h-6 bg-gray-200/60 rounded-md w-5/6" />
            <div className="h-6 bg-gray-200/60 rounded-md w-4/6" />

            <div className="h-8 bg-gray-200/60 rounded-md w-24 mt-4" />

            <div className="flex gap-5 mt-6">
              <div className="h-12 bg-gray-200/60 rounded-md w-32" />
              <div className="h-12 bg-gray-200/60 rounded-md w-32" />
            </div>
          </div>
        </div>

      </div>
    );
  }
  return product ? (
    <div className="flex flex-col gap-y-10 overflow-hidden md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8">
      <div className="mt-20 flex gap-8 flex-col md:flex-row">
        <div>
          <div className="shadow-md lg:w-[45vw] lg:h-[65vh]">
            <LazyLoadImage
              src={image || product.images[0]}
              className="w-full h-full object-contain"
              alt="Product Image"
            />
          </div>

          <div className="flex gap-2 mt-4">
            {product.images && product.images.length > 0
              ? product.images.length > 1 &&
                product.images.map((elem, idx) => (
                  <div
                    onClick={() => imageChange(elem)}
                    className="w-[20vw] h-[10vh] md:w-20 lg:w-[10vw] lg:h-[18vh] border border-gray-200 shadow"
                    key={idx}
                  >
                    <LazyLoadImage src={`${elem}`} alt="image" className="h-full w-full" />
                  </div>
                ))
              : ""}
          </div>
        </div>

        <div className="font-[font-1]">
          <h1 className="text-[3vw]  leading-[3vw]">{product?.title}</h1>
          <p className="mt-8 tracking-wide md:w-[40vw]">
            {product?.description}
          </p>
          <p className="mt-9 text-xl">$ {product?.price}</p>

          <div className="flex gap-5  mt-8">
            <button className="bg-black uppercase tracking-wider hover:scale-105 duration-300 px-3 py-3 text-white">
              Buy now
            </button>
            <button className=" px-3 uppercase tracking-wider hover:scale-105 duration-300 py-3 border">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex items-center justify-center md:justify-between w-full border-y pt-3 pb-3">
          <p className="uppercase text-xl hidden md:block">More</p>
          <h1 className="lg:text-4xl uppercase text-center font-thin tracking-wider">
            Discover other products
          </h1>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {relatedPro.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default ProductDetailPage;
