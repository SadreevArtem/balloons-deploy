import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";import { CatalogComponent } from "@/shared/components/CatalogComponent";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { ReactElement } from "react";
import { Header } from "@/shared/components/Header/Header";
;

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Catalog = ()=> {
  return (
    <>
      <AppHead title='Избраное' description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <CatalogComponent title="Каталог" className="md:mt-[60px] mt-[46px]"/>
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