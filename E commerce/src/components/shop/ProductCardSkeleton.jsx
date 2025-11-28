const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-300/40 rounded-3xl overflow-hidden p-4 flex flex-col items-start gap-y-4 font-[font-1]">
      <div className="w-full h-[48vh] animate-pulse bg-gray-200/70 rounded-3xl"></div>
      <div className="animate-pulse rounded-3xl bg-gray-200/70 w-full h-8"></div>
      <div className="animate-pulse rounded-3xl bg-gray-200/70 w-full h-8"></div>
    </div>
  );
};

export default ProductCardSkeleton;