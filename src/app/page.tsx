"use server";

import React from "react";
import Header from "@/components/Header";
import NewsLetterList from "@/components/NewsLetterList";
import { USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";
import { fetchNewsletters } from "@/api/newsletter";
import { Newsletter } from "@/types";


const page = async () => {
  const USERS = {
    single: USER_WITH_ONE_SUBSCRIPTION,
    multi: USER_WITH_MULTIPLE_SUBSCRIPTION,
    none: USER_WITHOUT_SUBSCRIPTION,
  } as const;

  const profileKey: keyof typeof USERS = "none"; // Simulation d'un utilisateur connecté
  const currentUser = USERS[profileKey];

  let newsletters: Newsletter[] | null = null;

  let hasError = false;

  try {
    newsletters = await fetchNewsletters();
  } catch (error) {
    hasError = true;
    console.error("Failed to fetch newsletters:", error);
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <Header />
      {hasError || !newsletters ? (
        <div className="mt-10 rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">
          <p>Impossible de récupérer les newsletters pour le moment. Merci de réessayer plus tard.</p>
        </div>
      ) : (
        <NewsLetterList newsletters={newsletters} user={currentUser} />
      )}
    </div>
  );
};

export default page;
