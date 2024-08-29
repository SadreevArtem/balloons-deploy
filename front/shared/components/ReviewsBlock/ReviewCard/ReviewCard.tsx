import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { TReviews } from "../ReviewsBlock";
import { AppModal } from "../../AppModal/AppModal";
import { ReviewPopup } from "../../ReviewPopup/ReviewPopup";
import { useModal } from "@/shared/hooks/useModal";
import { AppIcon } from "../../AppIcon";



type Props = {
  className?: string;
  item: TReviews;
  rating?: boolean;
};

export const ReviewCard: React.FC<Props> = ({ item, className, rating = false }) => {

  const currentOrganizer = item.user?.work || "";

  return (
    <>
      <div
        className={clsx(
          "relative w-[260px] h-[260px] md:w-[348px] md:h-[300px] overflow-hidden",
          "bg-white shadow-base rounded-4 md:rounded-6 p-4 md:p-6 pb-0 group hover:cursor-pointer",
          "before:absolute before:h-10 before:md:h-16 before:bg-gray-gradient before:bottom-0 before:left-0 before:right-0",
          className
        )}
        aria-hidden
      >
        <div className='flex items-center gap-3 mb-3 md:mb-6'>
          <div className='relative w-[228px] h-[228px] md:w-[300px] md:h-[250px] shrink-0'>
            <Image
              src={item.user?.image || "/empty.png"}
              alt={item.user?.lastName || "Аватар"}
              fill
              className='w-full h-full rounded-3 md:rounded-4 object-contain'
            />
          </div>

        </div>
      </div>
    </>
  );
};
