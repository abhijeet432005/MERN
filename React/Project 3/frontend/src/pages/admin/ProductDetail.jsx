import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncDeletProduct } from "../../store/actions/productsAction";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.user.user);
  const product = products?.find((elem) => elem.id == id);
  // console.log(product)

  const UpdateHandler = () => {
    navigate(`/admin/update-product/${product.id}`)
  }

  const DeleteHandler = () => {
    dispatch(asyncDeletProduct(id))
    navigate("/product")
  }
  return (
    <div className="flex p-[3rem] gap-[2rem] ">
      <div className="flex flex-col gap-3">
        <img src={product?.image} className="h-[30rem]" />

        <div className="flex w-full gap-2 justify-evenly p-2">
          {user?.isAdmin == true ? (
            <>
              <button onClick={UpdateHandler} className="button">
                <span>UPDATE PRODUCT</span>
              </button>
              <button onClick={DeleteHandler} className="button">
                <span>DELETE PRODUCT</span>
              </button>
            </>
          ) : (
            <>
              <button className="button">
                <span>BUY NOW</span>
              </button>
              <button className="button">
                <span>ADD TO CART</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="w-[70%]">
        <h1 className="text-4xl">{product?.title}</h1>
        <h1 className="text-2xl mt-3">₹{product?.price}</h1>
        <h1 className="text-2xl mt-3">{product?.category}</h1>
        <h1 className="text-2xl mt-3">{product?.description}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
