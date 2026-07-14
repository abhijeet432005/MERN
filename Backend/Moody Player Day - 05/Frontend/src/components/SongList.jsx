import SongCard from "./SongCard";
import EmptyState from "./EmptyState";

const SongList = ({ songs }) => {
  return (
    <div className="bg-slate-900 rounded-3xl p-8">

      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Recommended Songs
        </h2>

        <span className="bg-green-600 px-3 py-1 rounded-full">
          {songs.length}
        </span>
      </div>

      {songs.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-6">
          {songs.map((song) => (
            <SongCard
              key={song._id}
              song={song}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;