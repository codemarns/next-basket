import { NextResponse } from "next/server";
import { ResponseProps } from "@/app/types";

export async function getProducts() {
  // fetch request from API
  const res = await fetch("https://dummyjson.com/products");
  // returns a promise which resolves with the result of parsing the body text as JSON
  const data = await res.json();

  return NextResponse.json<ResponseProps>(data);
}
