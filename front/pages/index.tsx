import { Poiret_One } from "next/font/google";
import { Author } from "@/shared/components/Author/Author";
import { MetaData, reviews } from "@/shared/static";
import { AppHead } from "@/shared/components/AppHead";
import { ReviewsBlock } from "@/shared/components/ReviewsBlock/ReviewsBlock";
import { Categories } from "@/shared/components/Categories";
import { Selections } from "@/shared/components/Selections";
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Home = ()=> {
  return (
    <>
      <AppHead title={MetaData.title} description={MetaData.description} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <Author
          images={[
            { url: "/images/banner.jpg" },
            { url: "/images/banner2.jpg" },
          ]}
        />
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Selections title="Вам точно понравится"/>
        </div>
        <div id="contacts" className="md:mt-[60px] mt-4">
          <ReviewsBlock items={reviews} />
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Home;