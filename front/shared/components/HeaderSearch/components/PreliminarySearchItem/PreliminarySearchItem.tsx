import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  serviceName: string;
  imageUrl?: string | null;
  href: string;
  onClick: () => void;
};

export const PreliminarySearchItem: React.FC<Props> = ({
  title,
  serviceName,
  imageUrl,
  href,
  onClick
}) => {
  const isExternalUrl = href.includes("http");

  return (
    <Link
      className='flex items-center justify-between gap-4 px-4 cursor-pointer'
      href={isExternalUrl ? href : `/${href}`}
      target={isExternalUrl ? "_blank" : "_self"}
      onClick={!isExternalUrl ? onClick : () => {}}
    >
      <div className='flex items-center gap-2'>
        <Image
          src={imageUrl ?? "/empty.png"}
          alt={title}
          width={0}
          height={0}
          className='w-12 h-12 object-cover rounded-2 shrink-0'
        />
        <div className='text-base line-clamp-1'>{title}</div>
      </div>

      <div className='text-sm text-gray shrink-0'>{serviceName}</div>
    </Link>
  );
};
