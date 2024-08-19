import React from "react";
import { inter } from "@/pages";
import { CATALOG } from "@/shared/static";
import { CategoryCard } from "./components/CategoryCard";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  className?: string;
}


export const CatalogComponent: React.FC<Props> = ({title, className}) => {
  return (
    <>
      <section className={`w-full flex flex-col py-4 ${inter.className, className} bg-[#f7f7f7] ${styles.wrapper} min-h-[60vh] max-md:mb-12`}>
        <h3 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">{title}</h3>
        <ul className="container py-4 grid md:grid-cols-6 grid-cols-2 gap-6 md:gap-8 ">
            {CATALOG.map((category)=> <CategoryCard item={category} key={category.name}/>)}
        </ul>
      </section>
    </>
  );
};
