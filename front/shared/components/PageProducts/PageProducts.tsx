import React from "react";
import { inter } from "@/pages";
import { ProductCard } from "../ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/shared/types";
import { api } from "@/shared/api/api";
import { CategoryName } from "../Products/static";

type Props = {
  title: string;
  className?: string;
  category: CategoryName;
}


export const PageProducts: React.FC<Props> = ({title, className, category}) => {
 
    const getProducts = () => api.getProducts(category);
    const {data: products = [], isLoading} = useQuery<Product[]>({queryKey:['products', category], queryFn: getProducts});   

  
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
