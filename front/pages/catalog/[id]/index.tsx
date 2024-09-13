import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { DetailProductsClient } from "@/shared/components/DetailProductsClient/DetailProductsClient";
import { Header } from "@/shared/components/Header/Header";
import { MetaData } from "@/shared/static";
;

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});


// export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
//   const id = params?.id;

//   const item = await api.getProductById(id ? +id : 0);
//   return {
//     props: {
//       item,
//     },
//   };
// }


const ProductDetailClient = () => {
    const router = useRouter();
    const id = router.query.id;
    if (!id ) return null;
  return (
    <>
      <AppHead title={"BarBalls72 Воздушные шары с доставкой"} description={""} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
      <div className={`h-[100vh]${inter.className}`}>
        <DetailProductsClient id={+id} />
      </div>
      </div>
    </>
  );
};

ProductDetailClient.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default ProductDetailClient;


