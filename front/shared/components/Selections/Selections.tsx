import React from "react";
import { inter } from "@/pages";
import { ProductCard } from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/shared/types";
import { api } from "@/shared/api/api";

type Props = {
  title: string;
  className?: string;
  products: Product[];  // Add the products prop here to receive the products from the API call.
}


export const Selections: React.FC<Props> = ({title, className, products}) => {


  return (
    <>
    <h1 className="text-[1px] opacity-5">воздушные шары купить с доставкой в Тюмени</h1>
      <section className={`w-full flex flex-col py-4 ${inter.className, className} bg-[#f7f7f7]`}>
        <h5 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">{title}</h5>
        {<div className="container py-4 grid md:grid-cols-4 grid-cols-2 gap-8 place-items-center">
            {products?.map((product)=> <ProductCard item={product} key={product.name}/>)}
        </div>}
      </section>
    </>
  );
};
