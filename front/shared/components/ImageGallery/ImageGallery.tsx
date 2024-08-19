import React, { useState } from "react";
import clsx from "clsx";
import { ImageCard } from "./components/ImageCard";
import { SwiperButton } from "../AppSwiper/components/SwiperButton";
import { AppSwiper } from "../AppSwiper/AppSwiper";

export type TFilesModel = {
  alt: string;
  id: number;
  name: string;
  path: string;
};

type Props = {
  items?: TFilesModel[] | null;
  title?: string;
  className?: string;
  rating?: boolean;
};

export const ImageGallery: React.FC<Props> = ({ items, title = "Галерея", className }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  if (!items?.length) return null;

  return (
    <div className={clsx("block-container bg-gray-background", className)}>
      <div className='container flex items-center justify-between mb-6 md:mb-8'>
        <h2 className='text-lg md:text-xl lg:text-2xl'>{title}</h2>

        <div className='flex gap-6 max-md:hidden'>
          <SwiperButton ref={setPrevEl} type='prev' />
          <SwiperButton ref={setNextEl} type='next' />
        </div>
      </div>

      <AppSwiper
        containerClassName='md:container'
        slideClassName='pb-3 !w-[260px] md:!w-[348px]'
        items={items || []}
        itemsSlideSlot={(item) => <ImageCard item={item} />}
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
