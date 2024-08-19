import React, { ReactNode } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation } from "swiper/modules";
import { clsx } from "clsx";
import "swiper/css";

type Props<T> = {
  items: T[];
  itemsSlideSlot: (item: T) => ReactNode;
  prevEl: HTMLButtonElement | null;
  nextEl: HTMLButtonElement | null;
  containerClassName?: string;
  slideClassName?: string;
  disabledClassName?: string;
};

export const AppSwiper = <T extends { id?: number | null }>({
  items,
  itemsSlideSlot,
  prevEl,
  nextEl,
  slideClassName = "",
  containerClassName = "",
  disabledClassName = "",
  ...props
}: Props<T> & SwiperProps) => {
  return (
    <div className={clsx("relative", containerClassName)}>
      <Swiper
        navigation={{
          prevEl,
          nextEl,
          disabledClass: clsx(
            "!bg-gray-4 !text-gray-2 hover:!opacity-100 !shadow-none",
            disabledClassName
          )
        }}
        modules={[Navigation]}
        {...props}
      >
        {items?.map((item) => (
          <SwiperSlide key={item?.id} className={slideClassName}>
            {itemsSlideSlot(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
