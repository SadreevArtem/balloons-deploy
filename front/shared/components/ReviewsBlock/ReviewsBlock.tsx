import React, { useState } from "react";
import clsx from "clsx";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { AppSwiper } from "../AppSwiper/AppSwiper";
import { SwiperButton } from "../AppSwiper/components/SwiperButton/SwiperButton";


export type TReviews = {
  id: number;
  published: boolean;
  content: string;
  text: string;
  rating: number;
  user: {
    work: string;
    image: string;
    lastName: string;
    firstName: string;
  }
}

type Props = {
  items: TReviews[];
  title?: string;
  className?: string;
  rating?: boolean;
};

export const ReviewsBlock: React.FC<Props> = ({
  items,
  title = "Отзывы клиентов",
  rating = false,
  className
}) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const reviews = items.filter((item) => item.published);
  if (!reviews.length) {
    return null;
  }
  return (
    <div className={clsx("bg-[#d1baba] py-4 opacity-80", className)}>
      <div className='container flex items-center justify-between mb-6 md:mb-8'>
        <h2 className='text-lg md:text-xl text-white lg:text-2xl'>{title}</h2>

        <div className='flex gap-6 max-md:hidden'>
          <SwiperButton ref={setPrevEl} type='prev' />
          <SwiperButton ref={setNextEl} type='next' />
        </div>
      </div>

      <AppSwiper
        containerClassName='md:container'
        slideClassName='pb-3 !w-[260px] md:!w-[348px]'
        items={reviews}
        itemsSlideSlot={(item: TReviews) => <ReviewCard item={item} rating={rating} />}
        prevEl={prevEl}
        nextEl={nextEl}
        slidesPerView='auto'
        slidesPerGroup={1}
        breakpoints={{
          320: {
            spaceBetween: 12,
            allowTouchMove: true,
            slidesOffsetAfter: 16,
            slidesOffsetBefore: 16
          },
          768: {
            spaceBetween: 32,
            allowTouchMove: false,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0
          }
        }}
      />
    </div>
  );
};
