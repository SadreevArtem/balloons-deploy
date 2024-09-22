import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";
import { Header } from "@/shared/components/Header/Header";
import { MetaData } from "@/shared/static";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Girls = () => {
  return (
    <>
      <AppHead title="шары на день рождение девочке в Тюмени Barballs72" description={MetaData.description} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <h1 className="text-[1px] opacity-5">Воздушные шарики на др девочке</h1>
        <div className="md:mt-[60px] mt-16">
          <PageProducts title="Для девочки" category="forGirl" className="md:mt-[60px] mt-[46px]" />
        </div>
      </div>
    </>
  );
};

Girls.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Girls;