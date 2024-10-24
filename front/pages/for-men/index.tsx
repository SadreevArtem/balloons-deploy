import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";
import { Header } from "@/shared/components/Header/Header";
import { Categories } from "@/shared/components/Categories";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Men = () => {
  return (
    <>
      <AppHead title="Мужчине" description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-16">
          <PageProducts title="Мужчине" category="forMen" className="md:mt-[60px] mt-[46px]" />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
      </div>
    </>
  );
};

Men.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Men;