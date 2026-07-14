import React, { useState } from "react";
import FaceExpression from "./components/FacialExpression";

const App = () => {
  const [song, setSong] = useState([]);

  console.log(song);
  return (
    <div>
      <FaceExpression setSong={setSong} />

      <div className="songs">
        {song.length > 0 ? (
          song.map((item, index) => (
            <div className="song-card" key={item._id?.$oid || index}>
              <h2>{item.title}</h2>

              <p>
                <strong>Artist:</strong> {item.artist}
              </p>

              <span className="mood">{item.mood}</span>

              <audio controls>
                <source src={item.audio} type="audio/mpeg" />
              </audio>
            </div>
          ))
        ) : (
          <h3>No songs found.</h3>
        )}
      </div>
    </div>
  );
};

export default App;
