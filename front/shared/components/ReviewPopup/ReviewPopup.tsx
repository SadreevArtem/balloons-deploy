import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { AppIcon } from "../AppIcon";
import { TReviews } from "../ReviewsBlock/ReviewsBlock";


export type ReviewItem = {
  id: number;
  imgUrl: string;
  name: string;
  education: string;
  review: string;
};

type Props = {
  item: TReviews;
  rating?: number | null;
  className?: string;
};

export const ReviewPopup: React.FC<Props> = ({ item, rating, className }) => {
  const isRating = Boolean(rating);
  const currentOrganizer = item.user?.work || "";

  return (
    <div className={clsx("max-w-[800px]", className)}>
      <div className='flex items-center gap-3 md:gap-8 mb-6 md:mb-8'>
        <div
          className={clsx("relative w-12 h-12 md:w-[124px] md:h-[124px] shrink-0 hidden md:flex")}
        >
          <Image
            src={item.user?.image || "/empty.png"}
            alt={item.user?.lastName || "Аватар"}
            fill
            className='w-full h-full rounded-3 md:rounded-4 object-cover'
          />
        </div>

        <div className='flex flex-col gap-6 md:gap-4 w-full '>
          <div className='text-base md:text-2xl font-semibold md:font-bold'>
            {`${item.user?.lastName} ${item.user?.firstName}`}
          </div>
          <div
            className={clsx("block md:hidden w-full h-[200px] relative",)}
          >
            {(
              <Image
                src={item.user?.image || "/empty.png"}
                alt={item.user?.lastName || "Аватар"}
                fill
                className='rounded-3  object-cover'
              />
            )}
          </div>

          {!isRating && (
            <div className='text-xs md:text-lg text-gray whitespace-break-spaces'>
              {currentOrganizer}
            </div>
          )}
          {isRating && rating && (
            <div className='flex items-center'>
              {Array(rating)
                .fill("")
                .map((_, index) => (
                  <AppIcon
                    key={`StarFilled-${index}`}
                    type='star-filled'
                    className='text-hover max-md:w-6 max-md:h-6'
                  />
                ))}
              {5 - rating > 0 &&
                Array(10 - rating)
                  .fill("")
                  .map((_, index) => (
                    <AppIcon
                      key={`StarNotFilled-${index}`}
                      type='star-filled'
                      className='text-gray-purple max-md:w-6 max-md:h-6'
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
      {isRating && currentOrganizer && (
        <div className='text-sm md:text-lg font-semibold whitespace-break-spaces mb-3 md:mb-4 max-md:pt-2'>
          {currentOrganizer}
        </div>
      )}
      <div className='text-sm md:text-base whitespace-break-spaces overflow-auto max-h-[400px]'>
        {item.text}
      </div>
    </div>
  );
};
