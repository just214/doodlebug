"use client";
import { useRef, useState } from "react";

import { BiEraser, BiPencil, BiRedo, BiUndo } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";

import { Header } from "./Header";

const styles = {
  border: "none",
};

const buttonClassNames =
  "rounded-full p-2 transition-all active:scale-95 duration-200 ease-in-out";

export const Pad = () => {
  const [eraserMode, setEraserMode] = useState<boolean>(false);
  const ref = useRef<ReactSketchCanvasRef>(null);

  function handleToggleMode() {
    setEraserMode((v) => {
      ref.current?.eraseMode(!v);
      return !v;
    });
  }
  return (
    <div className="h-screen w-full bg-gray-900">
      <div className="fixed top-4 w-full flex items-center justify-center mb-3">
        <Header />
      </div>

      <ReactSketchCanvas
        style={styles}
        ref={ref}
        strokeWidth={4}
        eraserWidth={20}
        height="100%"
        strokeColor="#fef9c3"
        canvasColor="#0c0a09"
      />

      <div className="fixed bottom-8 left-10 right-10 text-center z-[9999999]">
        <div className="inline-flex items-center justify-center gap-4 text-4xl mt-4 rounded-full p-3 bg-gray-500/20">
          <button
            aria-label="Pen Mode"
            onClick={handleToggleMode}
            className={`${buttonClassNames} ${
              !eraserMode ? "bg-red-400 " : ""
            }`}
          >
            <BiPencil />
          </button>
          <button
            aria-label="Eraser Mode"
            onClick={handleToggleMode}
            className={`${buttonClassNames} ${
              eraserMode ? "bg-red-400 cursor-grab" : ""
            }`}
          >
            <BiEraser />
          </button>
          <button
            aria-label="Undo"
            className={buttonClassNames}
            onClick={() => ref.current?.undo()}
          >
            <BiUndo />
          </button>
          <button
            aria-label="Redo"
            className={buttonClassNames}
            onClick={() => ref.current?.redo()}
          >
            <BiRedo />
          </button>
          <button
            className={buttonClassNames}
            aria-label="Clear"
            onClick={() => ref.current?.resetCanvas()}
          >
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
};
