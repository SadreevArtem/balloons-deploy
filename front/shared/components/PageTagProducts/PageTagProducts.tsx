import React from "react";
import { inter } from "@/pages";
import { ProductCard } from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/shared/types";
import { api } from "@/shared/api/api";

type Props = {
  title: string;
  className?: string;
  tag: string;
}


export const PageTagProducts: React.FC<Props> = ({title, className, tag}) => {
 
    const getProductsByTag = () => api.getProductsByTag(tag);
    const {data: products = [], isLoading} = useQuery<Product[]>({queryKey:['products', tag], queryFn: getProductsByTag});   

  
  return (
    <>
      <section
        className={`w-full flex flex-col py-4 ${
          (inter.className, className)
        } bg-[#f7f7f7]`}
      >
        <h1 className="text-[1px] opacity-5">{`${title} с доставкой на дом в Тюмени`}</h1>
        <h3 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">
          {title}
        </h3>
        {products?.length > 0 && !isLoading ? (
          <div className="container py-4 grid md:grid-cols-4 grid-cols-2 gap-8">
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
