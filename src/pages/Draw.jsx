import { useRef, useState } from "react";

export default function Draw() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  const startDraw = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();
    ctx.moveTo(
      (e.clientX || e.touches[0].clientX) - rect.left,
      (e.clientY || e.touches[0].clientY) - rect.top
    );

    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(
      (e.clientX || e.touches[0].clientX) - rect.left,
      (e.clientY || e.touches[0].clientY) - rect.top
    );

    ctx.strokeStyle = "#ff7a18";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const stopDraw = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="page">
      <h1>Draw Anything</h1>

      <canvas
        ref={canvasRef}
        width={600}
        height={320}
        className="canvas-box"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
      />

      <div className="btn-group">
        <button className="btn outline" onClick={clearCanvas}>
          Clear
        </button>
        <button className="btn primary">
          Generate with AI
        </button>
      </div>
    </div>
  );
}