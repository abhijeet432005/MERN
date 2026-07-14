import * as faceapi from "face-api.js";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const FaceExpression = ({ setSong }) => {
  const videoRef = useRef();
  const [expression, setExpression] = useState("");

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  };

  const loadModels = async () => {
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.faceExpressionNet.loadFromUri("/models");
  };

  useEffect(() => {
    startVideo();
    loadModels();
  }, []);

  const detect = async () => {
    const detections = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections) {
      const expressions = detections.expressions;
      const maxExpression = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b,
      );
      setExpression(maxExpression);

      try {
        const response = await axios.get(
          `http://localhost:3000/songs?mood=${maxExpression}`,
        );

        setSong(response.data.song);
      } catch (err) {
        console.log(err);
      }
    }

  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ transform: "scaleX(-1)" }}
      />
      <button onClick={detect}>Detect Expression</button>
      <h2>Expression: {expression}</h2>
    </div>
  );
};

export default FaceExpression;
