// "use server";

// import "server-only";

import { getCount, getData, updateCount } from "@/_api/api";
import { revalidatePath } from "next/cache";

const fs = require("fs").promises;

export function readServerData() {
  let serverData = "";
  serverData = "This is Server Data.";

  // // read current server path
  // serverData = process.cwd();
  //
  // // read data from file
  // serverData = await fs.readFile("./_api/SERVER_DATA.txt", "utf8");
  //
  // // read data from database
  // serverData = await getData();
  //
  // // random delay
  // const delay = (Math.floor(Math.random() * 3) + 2) * 1000;
  // await new Promise((resolve) => setTimeout(resolve, delay));
  //
  console.log("Server Data: ", serverData);
  return serverData;
}

export async function queryFromDB(messageId: number) {
  console.log("Querying DB ...");
  const dbData = await getData(messageId);

  const delay = (Math.floor(Math.random() * 3) + 2) * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));
  console.log("DB Data: ", dbData);
  return dbData;
}

export async function loadCountFromDb() {
  console.log("Querying DB ...");
  const dbCount = await getCount();
  return parseInt(dbCount);
}

export async function updateCountInDb(val: number) {
  console.log("Updating DB ...");
  await updateCount(val);
}

export async function updateCountServer(data: FormData) {
  "use server";
  let newValue = data.get("val") as string;
  // data should be validated here ... ie using Zod ...

  console.log("updating count ...", newValue);
  await updateCountInDb(parseInt(newValue));
  revalidatePath("/");
}

export async function updateCountServerWithValue(newValue: number) {
  // when called from a client component we need "use server" at the top of the file
  console.log("updating count ...", newValue, typeof newValue);
  await updateCountInDb(newValue);
  revalidatePath("/");
}
