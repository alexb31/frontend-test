"use client";

import React, { useEffect, useMemo, useState } from "react";
import Card from "./Card";
import type { Newsletter } from "@/types";
import { fetchNewsletters } from "@/api/newsletter";
import { groupBySite } from "@/lib/utils";
import { SITE_LABELS, SITE_ORDER } from "@/constants/sites";

const NewsLetterList = () => {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
    const [loading, setLoading] = useState(false);

    const grouped = groupBySite(newsletters);


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
            {SITE_ORDER.map((site) => {
                const items = grouped[site];
                if (!items || items.length === 0) return null;

                return (
                    <section key={site} className="mb-10">
                        <h2>{SITE_LABELS[site] ?? site}</h2>
                        <div className="w-[70px] h-[4px] bg-red"></div>
                        {!loading && newsletters.length > 0 && (
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {newsletters.map((newsletter) => (
                                    <Card key={newsletter.id} newsletter={newsletter} />
                                ))}
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
};

export default NewsLetterList;
