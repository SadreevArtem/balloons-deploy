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

export const inter = Poiret_One({ weight: "400", subsets: ["cyrillic"] });

const Home = () => {
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
            { url: "/images/banner4.jpeg" },
            { url: "/images/banner3.jpg" },
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
          <Selections title="Вам точно понравится" />
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
