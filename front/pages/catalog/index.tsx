import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";import { CatalogComponent } from "@/shared/components/CatalogComponent";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { ReactElement } from "react";
import { Header } from "@/shared/components/Header/Header";
import { CATALOG, MetaData } from "@/shared/static";
;

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Catalog = ()=> {
  return (
    <>
      <AppHead title='Каталог | Воздушные шарики — купить гелиевые шары в Тюмени с доставкой' description={MetaData.description} keywords="Воздушные, шарики, Тюмень, доставка, купить, гелиевый, заказать, недорого, микс, большие" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-16">
          <CatalogComponent catalog={CATALOG} title="Каталог" className="md:mt-[60px] mt-[46px]"/>
        </div>
      </div>
    </>
  );
};

Catalog.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Catalog;