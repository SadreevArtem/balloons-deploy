import React from "react";

import { inter } from "@/pages";
import { CATEGORIES } from "@/shared/static";
import { CategoryItem } from "./components/CategoryItem/CategoryItem";
import Link from "next/link";

type Props = {
  className?: string;
}

export const Categories: React.FC<Props> = () => {
  return (
    <>
      <section
        className={`w-full flex flex-col py-4 ${inter.className} bg-[#f7f7f7]`}
      >
        <div className="container flex gap-8 overflow-scroll">
          {CATEGORIES.map((category) => (
            <Link key={category.name} href={category.href} className="shrink-0">
              <CategoryItem item={category} key={category.name} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
