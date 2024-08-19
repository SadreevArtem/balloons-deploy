import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";
import { CartComponent } from "@/shared/components/Cart";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { DetailProductsClient } from "@/shared/components/DetailProductsClient/DetailProductsClient";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { dehydrate, QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { Product } from "@/shared/types";
import { api } from "@/shared/api/api";
import { Header } from "@/shared/components/Header/Header";
;

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});


export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const id = params?.id;

  const item = await api.getProductById(id ? +id : 0);
  return {
    props: {
      item,
    },
  };
}


const ProductDetailClient = ({item}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const id = router.query.id;
    if (!id || !item) return null;
  return (
    <>
      <AppHead title={''} description="" />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
      <div className={`h-[100vh]${inter.className}`}>
        <DetailProductsClient item={item} />
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


