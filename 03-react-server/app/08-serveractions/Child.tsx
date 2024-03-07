"use client";

import { updateCountServerWithValue } from "@/app/02-backend/serverData";

// type ChildProps = { updateFn: () => Promise<void> };

export default function Child() {
  async function handleClick() {
    console.log("handling click ...");
  }

  console.log("rendering Child");
  return (
    <div
      style={{
        border: "3px solid black",
        padding: 30,
        marginTop: 30,
        backgroundColor: "cyan",
      }}
    >
      <h2 style={{ margin: 0 }}>Display of Child.</h2>
      <p style={{ marginTop: 0 }}>Rendering on client</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
