import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { ReactElement } from "react";
import { DetailProductsClient } from "@/shared/components/DetailProductsClient/DetailProductsClient";
import { Header } from "@/shared/components/Header/Header";
import { GetServerSidePropsContext } from "next";
import { api } from "@/shared/api/api";


export const inter = Poiret_One({ weight: "400", subsets: ['cyrillic'] });

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const id = params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const item = await api.getProductById(+id);
    return {
      props: {
        item,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const ProductDetailClient = ({ item }: { item: any }) => {

  if (!item) return <p>Product not found</p>;

  return (
    <>
      <AppHead title={`${item.name} - Воздушные шары BarBalls72`} description={item.description.slice(0, 150)} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className={`h-[100vh] ${inter.className}`}>
          <DetailProductsClient item={item} />
        </div>
      </div>
    </>
  );
};

ProductDetailClient.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ProductDetailClient;
