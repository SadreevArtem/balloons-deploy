import { useState } from "react";
import { Button } from "../Button";
import { Tabs } from "./components/Tabs/Tabs";
import { CategoryName } from "./static";
import { api } from "@/shared/api/api";
import { Product } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";




export const Products: React.FC = () => {

   const [tab, setTab]= useState<CategoryName>("all");
   const getProducts = () => api.getProducts(tab);
   const {data: products = [], isLoading} = useQuery<Product[]>({queryKey:['products', tab], queryFn: getProducts});   

  return (
    <section className="flex flex-col w-full">
      <div className="flex mb-2">
        <Link className="ml-auto" href="/admin/product/create"><Button className=" w-auto px-3" title="Добавить новый" /></Link>
      </div>
      <Tabs setTab={setTab} currentTab={tab} />
      {!isLoading ? <div className="mt-2">
        <ul className="flex flex-col gap-2 bg-gray-200 rounded-2 p-3">
           {products?.map((item) => <li key={item.id}><Link className="text-blue-500" href={`/admin/product/${item.id}`}>{item.name}</Link></li>)}
        </ul>
      </div>: <div>Загрузка...</div>}
    </section>
  );
};