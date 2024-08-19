import React from "react";

import { inter } from "@/pages";
import { CATEGORIES } from "@/shared/static";
import { CategoryItem } from "./components/CategoryItem/CategoryItem";

export const Categories: React.FC = () => {
  return (
    <>
      <section className={`w-full flex flex-col py-4 ${inter.className} bg-[#f7f7f7]`}>
        <div className="container flex gap-8 overflow-scroll">
            {CATEGORIES.map((category)=> <CategoryItem item={category} key={category.name}/>)}
        </div>
      </section>
    </>
  );
};
