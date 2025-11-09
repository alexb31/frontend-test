import React from 'react'
import Image from 'next/image'
import Button from './Button'
import type { Newsletter, User } from "@/types";
import Link from 'next/link';

interface CardProps {
    newsletter: Newsletter;
    user: User;
    isSubscribed: boolean;
    onToggle: () => void;
}


const Card = ({ newsletter, user, isSubscribed, onToggle }: CardProps) => {
    const { image, description, title, site, subscriptions } = newsletter;

    const hasRequiredRight =
        newsletter.subscriptions.length === 0 ||
        newsletter.subscriptions.some((required) =>
            user.subscriptions.includes(required),
        );

    return (
        <div className='flex flex-col items-center'>
            <Link href="/" className='w-full'>
                <Image src={image} alt={title} width={150} height={150} className='w-full' />
            </Link>
            <p>{description}</p>
            <Button hasAccess={hasRequiredRight} isSubscribed={isSubscribed} onToggle={onToggle}/>
        </div>
    )
}

export default Card
