import { suspend } from "suspend-react";
import { fetchDataFromApi, useApiData } from "../_api/useApiData.ts";

export function Greeter() {
  // fetching with effect and state
  const messageText = useApiData();

  // fetching with suspense
  // const messageText = suspend(fetchDataFromApi);

  console.log("rendering Gereeter with messageText", messageText);
  return (
    <div style={{ minHeight: 50 }}>
      <h3>{messageText}</h3>
    </div>
  );
}
