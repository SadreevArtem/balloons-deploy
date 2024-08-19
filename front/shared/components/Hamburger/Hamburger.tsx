import React from "react";
import { createPortal } from "react-dom";
import { HamburgerMenu } from "../HamburgerMenu";
import { HeaderMenuItem } from "./static";
import { inter } from "@/pages";
import { AppIcon } from "../AppIcon";
import clsx from "clsx";


type Props = {
  menu: HeaderMenuItem[];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
};

export const Hamburger: React.FC<Props> = ({
  menu,
  active,
  onOpen,
  onClose,
  className = "string"
}) => {
  const onToggle = () => (active ? onClose() : onOpen());

  return (
    <>
      <button onClick={onToggle} className="flex">
        <div className={clsx("flex flex-col gap-1 ", {hidden: active})}>
          <div
            className={clsx("bg-[#9d8c98] w-[22px] h-[2px]")}
          />
           <div
            className={clsx("bg-[#9d8c98] w-[22px] h-[2px]")}
          />
           <div
            className={clsx("bg-[#9d8c98] w-[22px] h-[2px]")}
          />
        </div>
        <AppIcon
          type="close"
          className={clsx("text-primary max-md:w-[22px] max-md:h-[22px]", {
            hidden: !active,
          })}
        />
      </button>
      {active &&
        createPortal(
          <HamburgerMenu
            className={`${inter.className} "md:hidden"`}
            menu={menu}
            onClose={onClose}
          />,
          document.body
        )}
    </>
  );
};
