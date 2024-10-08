import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";import { CatalogComponent } from "@/shared/components/CatalogComponent";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { ReactElement } from "react";
import { Header } from "@/shared/components/Header/Header";
import { CATALOG, CategoriesMap, MetaData } from "@/shared/static";
;

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Category = ()=> {
  return (
    <>
      <AppHead title='Гелиевые шарики заказать в Тюмени Barballs72' description={MetaData.description} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <h1 className="text-[1px] opacity-5">гелиевые шары купить с доставкой в Тюмени</h1>
        <div className="md:mt-[60px] mt-16">
          <CatalogComponent catalog={CategoriesMap.map(el=>({
             id: el.id,
             name: el.title,
             href: `/category/${el.categoryName}`,
          }))} title="Категории" className="md:mt-[60px] mt-[46px]"/>
        </div>
      </div>
    </>
  );
};

Category.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Category;