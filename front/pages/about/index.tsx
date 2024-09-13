import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";
import { AboutAuthor } from "@/shared/components/AboutAuthor/AboutAuthor";
import { AppAccordionGroup } from "@/shared/components/AppAccordionGroup/AppAccordionGroup";
import { accordeonItems, MetaData } from "@/shared/static";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const About = () => {
  return (
    <>
      <AppHead title="О нас | Воздушные и гелиевые шары в Тюмени с быстрой доставкой" description={MetaData.description} />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-16">
          <AboutAuthor />
          <div className="md:mt-[60px] mt-8">
            <AppAccordionGroup
              className="container"
              items={accordeonItems}
              accordionContentSlot={(item) => (
                <ul>
                  {item.value.map((value) => (
                    <li key={value} className="text-primary">
                      <div dangerouslySetInnerHTML={{ __html: value ?? "" }} />
                    </li>
                  ))}
                </ul>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default About;