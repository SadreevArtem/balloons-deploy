import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";
import { PageTagProducts } from "@/shared/components/PageTagProducts/PageTagProducts";
import { useRouter } from "next/router";
import { CategoriesMap } from "@/shared/static";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const CategoryPage = () => {
    const router = useRouter();
    const slug = router.query.slug;
    const title = CategoriesMap.find(item => item.categoryName === slug)?.title;
    
    if (!slug ) return null;
  return (
    <>
      <AppHead title="Мужчине" description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <PageTagProducts title={title || ""} tag={slug as string} className="md:mt-[60px] mt-[46px]" />
        </div>
      </div>
    </>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default CategoryPage;