const EmptyState = () => {
  return (
    <div className="h-96 flex flex-col justify-center items-center">

      <div className="text-7xl">
        🎧
      </div>

      <h2 className="text-2xl mt-5">
        No Songs Found
      </h2>

      <p className="text-slate-400 mt-2">
        Detect your facial expression first.
      </p>

    </div>
  );
};

export default EmptyState;