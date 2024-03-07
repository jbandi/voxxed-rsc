import Child from "./Child";
import {
  loadCountFromDb,
  queryFromDB,
  updateCountInDb,
  updateCountServer,
} from "@/app/02-backend/serverData";
import { Suspense } from "react";
import { Spinner } from "@/app/Spinner";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Container() {
  const dataFromDb = await loadCountFromDb();

  async function updateCount() {
    "use server";
    console.log("updating count ...");
    await updateCountInDb(dataFromDb + 1); // 🤯🤯🤯 we can use `dataFromDb` in a method that is called from the client ...
    revalidatePath("/");
    // redirect("/");
  }

  console.log("rendering Container");
  return (
    <div
      style={{
        border: "5px solid black",
        padding: 30,
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>Container</h1>
      <p style={{ marginTop: 0 }}>Rendering on server</p>
      <h1>{dataFromDb}</h1>
      <form action={updateCount}>
        {/*<input*/}
        {/*  style={{ height: "2em", width: 50, margin: 10 }}*/}
        {/*  name={"val"}*/}
        {/*  defaultValue={dataFromDb + 1}*/}
        {/*/>*/}
        <button type="submit">Update</button>
      </form>
      {/*<Child />*/}
    </div>
  );
}
