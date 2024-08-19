import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { IconType } from "../AppIcon/types";
import { AppIcon } from "../AppIcon";


export type TSetting = {
  id: number;
  name: IconType;
  value?: string;
};

type Props = {
  socials: TSetting[];
  className?: string;
};

export const Socials: React.FC<Props> = ({ socials, className = "" }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {socials.map((social) => {
        return social.value ? (
          <Link
            key={social.id}
            href={social.value ?? ""}
            target='_blank'
            title={social.name}
            rel='noreferrer'
            className={clsx(
              "flex items-center justify-center w-8 h-8 rounded-[6px] bg-white",
              "text-primary hover:text-primary-dark active:text-primary-light",
              "border border-primary hover:border-primary-dark active:border-primary-light"
            )}
          >
            <AppIcon type={social.name} />
          </Link>
        ) : null;
      })}
    </div>
  );
};
