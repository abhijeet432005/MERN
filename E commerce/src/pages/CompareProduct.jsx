import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initCompare } from "../store/actions/compareAction";
import { toast } from "react-toastify";

const CompareProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const compareItems = useSelector((state) => state.compareSlice.compareItems) || [];

  const Remove = (id) => {
    const updated = compareItems.filter((item) => item.id !== id);
    localStorage.setItem("compareItems", JSON.stringify(updated));
    dispatch(initCompare());
    toast.success("Product removed from compare");
  };

  const Empty = () => {
    localStorage.setItem("compareItems", JSON.stringify([]));
    dispatch(initCompare());
    toast.success("Compare list cleared");
    navigate(-1);
  };

  const rows = [
    { key: "thumbnail", label: "Preview" },
    { key: "title", label: "Name" },
    { key: "price", label: "Price", format: (v) => `$ ${v}` },
    { key: "description", label: "Description" },
    { key: "warrantyInformation", label: "Warranty" },
    { key: "stock", label: "Stock" },
    { key: "returnPolicy", label: "Return Policy" },
    { key: "shippingInformation", label: "Shipping" },
  ];

  if (!compareItems.length) {
    return (
      <div className="mt-20 flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-[font-3] tracking-wide text-gray-900">
          No products to compare
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="px-4 py-2 rounded-full border border-gray-300 text-sm uppercase tracking-wide font-[font-1] hover:bg-black hover:text-white transition"
        >
          Back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 font-[font-1] md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Compare
          </p>
          <h1 className="text-2xl md:text-3xl font-[font-3] tracking-wide">
            Product Comparison
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            You can compare up to <span className="font-semibold">2 products</span>.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-600">
              {compareItems.length} item{compareItems.length > 1 ? "s" : ""} selected
            </span>
          </div>
          <button
            onClick={Empty}
            className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-gray-300 uppercase tracking-wide hover:bg-black hover:text-white transition"
          >
            Empty compare
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[650px] border border-gray-200 rounded-3xl bg-white shadow-sm">
          <div className="grid grid-cols-[1.1fr_repeat(2,1fr)] divide-y divide-gray-100">
            <div className="bg-gray-50/70 px-4 py-3 rounded-tl-3xl text-xs uppercase tracking-[0.2em] text-gray-500">
              Feature
            </div>
            {compareItems.map((item, index) => (
              <div
                key={item.id}
                className={`px-4 py-3 flex items-center justify-between gap-2 ${
                  index === compareItems.length - 1 ? "rounded-tr-3xl" : ""
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Product {index + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-800 truncate max-w-[160px]">
                    {item.title}
                  </span>
                </div>
                <button
                  onClick={() => Remove(item.id)}
                  className="text-[0.7rem] uppercase tracking-wide border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-900 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            ))}
            {compareItems.length < 2 && (
              <div className="px-4 py-3 flex items-center text-xs text-gray-400">
                Add one more product to compare
              </div>
            )}

            {rows.map((row) => (
              <React.Fragment key={row.key}>
                <div className="px-4 py-4 bg-gray-50 text-sm text-gray-600 font-medium border-r border-gray-100">
                  {row.label}
                </div>

                {compareItems.map((item) => {
                  let value = item[row.key];

                  if (row.key === "thumbnail") {
                    return (
                      <div
                        key={item.id + row.key}
                        className="px-4 py-4 flex items-center justify-center"
                      >
                        <div onClick={() => navigate(`/shop/product/${item.id}/${item.title}`)} className="w-32 h-32 md:w-40 md:h-40 border border-gray-200 rounded-2xl overflow-hidden bg-white">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    );
                  }

                  if (row.format) value = row.format(value);

                  return (
                    <div
                      key={item.id + row.key}
                      className="px-4 py-4 text-sm text-gray-700 align-top"
                    >
                      {value || <span className="text-gray-400 text-xs">—</span>}
                    </div>
                  );
                })}

                {compareItems.length < 2 && (
                  <div className="px-4 py-4 text-xs text-gray-400 flex items-center">
                    —
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-full border border-gray-300 text-xs md:text-sm uppercase tracking-wide hover:bg-black hover:text-white transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CompareProduct;