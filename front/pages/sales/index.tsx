import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageSalesProducts } from "@/shared/components/PageSalesProducts/PageSalesProducts";
import { Header } from "@/shared/components/Header/Header";
import { api } from "@/shared/api/api";
import { Product } from "@/shared/types";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export async function getStaticProps() {
  // Получаем продукты из API
  const products = await api.getSalesProducts();

  return {
    props: {
      products, // Передаем продукты в качестве пропсов
    },
    revalidate: 180, // Переинициализация данных каждые 60 секунд для обновления
  };
}

const Sales = ({ products }: { products: Product[] }) => {
  return (
    <>
      <AppHead title="Акции" description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-16">
          <PageSalesProducts title="Распродажа" products={products} className="md:mt-[60px] mt-[46px]" />
        </div>
      </div>
    </>
  );
};

Sales.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Sales;