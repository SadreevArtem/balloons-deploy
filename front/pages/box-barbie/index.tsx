import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";
import { Header } from "@/shared/components/Header/Header";
import { MetaData } from "@/shared/static";
import { Categories } from "@/shared/components/Categories";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const BoxBarbie = () => {
  return (
    <>
      <AppHead title="Надувные шары в Тюмени Barballs72" description={MetaData.description} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <h1 className="text-[1px] opacity-5">оформление праздников надувными шарами</h1>
        <div className="md:mt-[60px] mt-16">
          <PageProducts title="Шар в шаре" category="boxBarbie" className="md:mt-[60px] mt-[46px]" />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
      </div>
    </>
  );
};

BoxBarbie.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default BoxBarbie;