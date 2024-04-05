import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  console.log("before homePage sleep ...");
  await sleep(3000);
  console.log("after homePage sleep ...");
  return <div>HomePage</div>;
};

export default page;
