const Navbar = () => {
  return (
    <nav className="border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">

        <h1 className="text-3xl font-bold">
          Mood<span className="text-green-500">Tunes</span>
        </h1>

        <p className="text-slate-400">
          AI Music Recommendation
        </p>

      </div>
    </nav>
  );
};

export default Navbar;