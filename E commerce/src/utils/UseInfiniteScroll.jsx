import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../API/AxiosConfig";
import { clearProduct, loadProduct } from "../store/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const UseInfiniteScroll = () => {
  const dispatch = useDispatch();
  const [skip, setskip] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  const category = useSelector((state) => state.productsSlice.Selectedcategory);
  const product = useSelector(state => state.productsSlice.product)

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`/products/?limit=12&skip=${skip}`);

      const product = data.products;

      if (product.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        dispatch(loadProduct(product));
        setskip((prev) => prev + 12);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCatProduct = async () => {
    try {
      const { data } = await axios.get(
        `/products/category/${category}/?limit=12&skip=${skip}`
      );

      const product = data?.products;

      if (product.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        dispatch(loadProduct(product));
        setskip((prev) => prev + 12);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setskip(0);
    sethasMore(true);
    dispatch(clearProduct());
  }, [category]);

  useEffect(() => {
    if (skip === 0) {
      category === null ? fetchProduct() : fetchCatProduct();
    }
  }, [skip]);
  
  return {product , hasMore, fetchCatProduct, fetchProduct, category}
};

export default UseInfiniteScroll;
