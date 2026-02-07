import { useRef, useState } from "react";

export default function Draw() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [aiImage, setAiImage] = useState("");

  const startDraw = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  const stopDraw = () => setDrawing(false);

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 800, 450);
  };

  const generateAI = async () => {
    const image = canvasRef.current.toDataURL("image/png");

    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image }),
    });

    const data = await res.json();
    setAiImage(data.image);
  };

  return (
    <div className="draw">
      <canvas
        ref={canvasRef}
        width={800}
        height={450}
        className="canvas"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
      />

      <div className="btns">
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={generateAI}>Generate with AI</button>
      </div>

      {aiImage && <img src={aiImage} className="result" alt="AI" />}
    </div>
  );
}
