import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";
import { Header } from "@/shared/components/Header/Header";
import { Categories } from "@/shared/components/Categories";
import { Product } from "@/shared/types";
import { api } from "@/shared/api/api";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export async function getStaticProps() {
  // Получаем продукты из API
  const products = await api.getProducts("surpriseBox");

  return {
    props: {
      products, // Передаем продукты в качестве пропсов
    },
    revalidate: 180, // Переинициализация данных каждые 60 секунд для обновления
  };
}

const SurpriseBox = ({ products }: { products: Product[] }) => {
  return (
    <>
      <AppHead title="Коробка - сюрприз" description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-16">
          <PageProducts title="Коробка - сюрприз" products={products} className="md:mt-[60px] mt-[46px]" />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
      </div>
    </>
  );
};

SurpriseBox.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default SurpriseBox;