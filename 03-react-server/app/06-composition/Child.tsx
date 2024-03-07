"use client";
import Shared from "./Shared";

export default function Child() {
  console.log("rendering Child");
  return (
    <div
      style={{
        border: "3px solid black",
        padding: 30,
        backgroundColor: "cyan",
      }}
    >
      <h2 style={{ margin: 0 }}>Display of Child.</h2>
      <p style={{ marginTop: 0 }}>Rendering on client</p>
    </div>
  );
}
