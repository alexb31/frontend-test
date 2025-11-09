"use server";

import React from "react";
import Header from "@/components/Header";
import NewsLetterList from "@/components/NewsLetterList";

const page = () => {
  return <div className="container mx-auto mt-8">
    <Header />
    <NewsLetterList />
  </div>;
};

export default page;
