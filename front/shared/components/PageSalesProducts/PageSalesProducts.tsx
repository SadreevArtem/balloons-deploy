import React from "react";
import { inter } from "@/pages";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "@/shared/types";


type Props = {
  title: string;
  className?: string;
  products: Product[];
}


export const PageSalesProducts: React.FC<Props> = ({title, className, products}) => {
 
  
  return (
    <>
      <section
        className={`w-full flex flex-col py-4 ${
          (inter.className, className)
        } bg-[#f7f7f7]`}
      >
        <h3 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">
          {title}
        </h3>
        {products?.length > 0 ? (
          <div className="container py-4 grid md:grid-cols-4 grid-cols-2 gap-8 place-items-center">
            {products.map((product) => (
              <ProductCard item={product} key={product.name} />
            ))}
          </div>
        ) : (
          <div className="container text-center text-gray-600">
            Товары отсутствуют
          </div>
        )}
      </section>
    </>
  );
};
