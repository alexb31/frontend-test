import React from 'react'
import Image from 'next/image'
import Button from './Button'
import type { Newsletter } from "@/types";
import Link from 'next/link';

interface CardProps {
  newsletter: Newsletter;
}


const Card = ({newsletter: {id, image, description, title, site, subscriptions}}: CardProps) => {
  return (
    <div className='flex flex-col items-center'>
        <Link href="/" className='w-full'>
            <Image src={image} alt={title} width={150} height={150} className='w-full'/>
        </Link>
        <p>{description}</p>
        <Button />
    </div>
  )
}

export default Card