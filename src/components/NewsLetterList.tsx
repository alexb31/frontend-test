"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import type { Newsletter } from "@/types";
import { fetchNewsletters } from "@/api/newsletter";

const NewsLetterList = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadNewsletters = async () => {
      setLoading(true);

      try {
        const data = await fetchNewsletters();
        setNewsletters(data);
      } catch (error) {
        console.error("Error fetching newsletters:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNewsletters();
  }, []);

  return (
    <div className="mt-5">
      <h2>Les Echos</h2>
      <div className="w-[70px] h-[4px] bg-red"></div>
      {!loading && newsletters.length > 0 && (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsletters.map((newsletter) => (
            <Card key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsLetterList;
