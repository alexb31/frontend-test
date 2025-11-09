"use server";

import React from "react";
import Header from "@/components/Header";
import NewsLetterList from "@/components/NewsLetterList";
import { USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";
import { fetchNewsletters } from "@/api/newsletter";


const page = async () => {
  const USERS = {
    single: USER_WITH_ONE_SUBSCRIPTION,
    multi: USER_WITH_MULTIPLE_SUBSCRIPTION,
    none: USER_WITHOUT_SUBSCRIPTION,
  } as const;

  const profileKey: keyof typeof USERS = "none"; // Simulation d'un utilisateur connecté
  const currentUser = USERS[profileKey];

  const newsletters = await fetchNewsletters();

  return (
    <div className="container mx-auto mt-8">
      <Header />
      <NewsLetterList newsletters={newsletters} user={currentUser} />
    </div>
  );
};

export default page;
