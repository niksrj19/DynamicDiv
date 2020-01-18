import React from "react";
import { solution } from "./division";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="div-item" />
      {solution()}
    </div>
  );
}
