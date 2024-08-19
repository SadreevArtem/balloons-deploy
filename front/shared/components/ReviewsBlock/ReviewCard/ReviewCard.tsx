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
  const { open, handleOpen, handleClose } = useModal();
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
        onClick={handleOpen}
        aria-hidden
      >
        <div className='flex items-center gap-3 mb-3 md:mb-6'>
          <div className='relative w-12 h-12 md:w-[68px] md:h-[68px] shrink-0'>
            <Image
              src={item.user?.image || "/empty.png"}
              alt={item.user?.lastName || "Аватар"}
              fill
              className='w-full h-full rounded-3 md:rounded-4 object-cover'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <div className='text-base md:text-lg font-semibold group-hover:text-primary group-active:text-primary-light'>
              {`${item.user?.lastName} ${item.user?.firstName}`}
            </div>
            {rating ? (
              <div className='flex gap-1 font-semibold'>
                <AppIcon type='star-filled' className='w-5 h-5 text-primary' />
                <div className='text-primary'>{item.rating}</div>
                <div className='text-gray'>из 10</div>
              </div>
            ) : (
              <div className='text-xs md:text-sm text-gray whitespace-break-spaces line-clamp-2'>
                {currentOrganizer}
              </div>
            )}
          </div>
        </div>
        {rating && currentOrganizer && (
          <div className='text-base font-semibold pb-2'>{currentOrganizer}</div>
        )}
        <div className='text-base whitespace-break-spaces'>{item.text}</div>
      </div>

      <AppModal isOpen={open} closeHandler={handleClose}>
        <ReviewPopup item={item} rating={item.rating} />
      </AppModal>
    </>
  );
};
