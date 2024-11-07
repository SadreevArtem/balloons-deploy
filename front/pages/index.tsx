import { Poiret_One } from "next/font/google";
import { Author } from "@/shared/components/Author/Author";
import { faqsMainPage, MetaData, reviews } from "@/shared/static";
import { AppHead } from "@/shared/components/AppHead";
import { ReviewsBlock } from "@/shared/components/ReviewsBlock/ReviewsBlock";
import { Categories } from "@/shared/components/Categories";
import { Selections } from "@/shared/components/Selections";
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";
import { Faq } from "@/shared/components/Faq/Faq";
import { api } from "@/shared/api/api";
import { Product } from "@/shared/types";

export const inter = Poiret_One({ weight: "400", subsets: ["cyrillic"] });

export async function getStaticProps() {
  // Получаем продукты из API
  const products = await api.getSelectionsProducts();

  return {
    props: {
      products, // Передаем продукты в качестве пропсов
    },
    revalidate: 180, // Переинициализация данных каждые 180 секунд для обновления
  };
}
const Home = ({ products }: { products: Product[] }) => {
  return (
    <>
      <AppHead
        title={"Воздушные шары заказать в Тюмени Barballs72"}
        description={MetaData.description}
        keywords={MetaData.keywords}
        image={"/apple-touch-icon.png"}
      />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <Author
          images={[
            // { url: "/images/banner.jpg" },
            // { url: "/images/banner2.jpg" },
            { url: "/images/banner4.webp" },
            { url: "/images/banner3.webp" },
            // { url: "/images/banner5.jpg" },
            // { url: "/images/banner6.jpg" },
            // { url: "/images/banner7.jpg" },
            // { url: "/images/banner8.jpg" },
            // { url: "/images/banner9.jpg" },
          ]}
        />
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Selections products={products} title="Вам точно понравится" />
        </div>
        <div className="md:mt-[60px] mt-4">
          <ReviewsBlock items={reviews} />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Faq faqs={faqsMainPage} title="Воздушные шарики с гелием: частые вопросы и ответы"/>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Home;
