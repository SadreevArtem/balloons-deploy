import { AppIcon } from "@/shared/components/AppIcon";
import clsx from "clsx";
import React, { MouseEvent, forwardRef } from "react";

type Props = {
  type: "prev" | "next";
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const SwiperButton = forwardRef<HTMLButtonElement, Props>(
  ({ type, className = "", onClick }, ref, ...props) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "w-12 h-12 flex items-center justify-center",
          "rounded-full bg-white shadow-base text-primary hover:opacity-70",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <AppIcon type='chevron-right' className={clsx({ "rotate-180": type === "prev" })} />
      </button>
    );
  }
);

SwiperButton.displayName = "SwiperButton";
