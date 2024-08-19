import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageSalesProducts } from "@/shared/components/PageSalesProducts/PageSalesProducts";
import { Header } from "@/shared/components/Header/Header";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Sales = () => {
  return (
    <>
      <AppHead title="Акции" description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <PageSalesProducts title="Распродажа" category="" className="md:mt-[60px] mt-[46px]" />
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