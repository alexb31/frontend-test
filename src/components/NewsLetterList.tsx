"use client";

import React, { useMemo, useState } from "react";
import Card from "./Card";
import type { Newsletter, User } from "@/types";
import { groupBySite } from "@/lib/utils";
import { SITE_LABELS, SITE_ORDER } from "@/constants/sites";

interface NewsLetterListProps {
    newsletters: Newsletter[];
    user: User;
}

const NewsLetterList: React.FC<NewsLetterListProps> = ({ newsletters, user }) => {
    const [subscribedIds, setSubscribedIds] = useState<string[]>([]);
    const grouped = useMemo(() => groupBySite(newsletters), [newsletters]);

    const handleToggle = (id: string) => {
        setSubscribedIds((prev) =>
            prev.includes(id) ? prev.filter((nid) => nid !== id) : [...prev, id],
        );
    };


    if (newsletters.length === 0) {
        return <p className="mt-5 text-center text-sm text-gray-500">Aucune newsletter n'est disponible pour le moment.</p>;
    }

    return (
        <div className="mt-5 space-y-10">
            {SITE_ORDER.map((site) => {
                const items = grouped[site];
                if (!items || items.length === 0) return null;

                return (
                    <section key={site} className="space-y-4">
                        <div className="mb-10">
                            <h2>{SITE_LABELS[site] ?? site}</h2>
                            <div className="mt-2 h-1 w-16 bg-red" />
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                            {items.map((newsletter) => (
                                <Card
                                    key={newsletter.id}
                                    newsletter={newsletter}
                                    user={user}
                                    isSubscribed={subscribedIds.includes(newsletter.id)}
                                    onToggle={() => handleToggle(newsletter.id)}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default NewsLetterList;
