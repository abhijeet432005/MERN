const SongCard = ({ song }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 transition">

      <div className="flex gap-5">

        <div className="w-24 h-24 rounded-xl bg-green-500 flex justify-center items-center text-4xl">
          🎵
        </div>

        <div className="flex-1">

          <h2 className="text-xl font-bold">
            {song.title}
          </h2>

          <p className="text-slate-400">
            {song.artist}
          </p>

          <span className="inline-block mt-3 bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
            {song.mood}
          </span>

          <audio controls className="w-full mt-5">
            <source src={song.audio} />
          </audio>

        </div>

      </div>

    </div>
  );
};

export default SongCard;