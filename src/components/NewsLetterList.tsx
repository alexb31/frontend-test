"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card';
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import type { Newsletter } from "@/types";


// interface NewsLetterListProps {
//     items?: Newsletter[];
// }

const NewsLetterList = () => {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);

    useEffect(() => {
        // Simulate fetching data
        setNewsletters(NEWSLETTER_ITEMS);
    }, []);
    return (
        <div className='mt-5'>
            <h2>Les Echos</h2>
            <div className='w-[70px] h-[4px] bg-red'></div>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {newsletters.map((newsletter) => (
                    <Card key={newsletter.id} newsletter={newsletter} />
                ))}
            </div>
        </div>
    )
}

export default NewsLetterList