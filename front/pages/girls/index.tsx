import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";
import { Header } from "@/shared/components/Header/Header";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Girls = () => {
  return (
    <>
      <AppHead title="Девочке" description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <PageProducts title="Для девочки" category="girl" className="md:mt-[60px] mt-[46px]" />
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