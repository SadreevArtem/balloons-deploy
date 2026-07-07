import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { AppAccordionGroup } from "../AppAccordionGroup/AppAccordionGroup";
import { accordeonItems } from "@/shared/static";

export const AboutAuthor: React.FC = ()=>{
    return (
      <div className="container md:mt-32 mt-24">
        <div className="flex justify-end relative max-md:flex-col">
          <div className="flex relative justify-center items-start border-8 border-[#f9deaf]">
            <div
              className={clsx(
                "relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg md:hidden"
              )}
            >
              <Image
                width={560}
                height={750}
                src={"/images/banner.jpeg"}
                alt={"воздушные шарики"}
                className="top-0 left-0 right-0 bottom-0"
              />
            </div>
            <div
              className={clsx(
                "relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg max-md:hidden"
              )}
            >
              <Image
                width={560}
                height={750}
                src={"/images/banner.jpeg"}
                alt={"воздушные шарики"}
                className="top-0 left-0 right-0 bottom-0"
              />
            </div>
          </div>
          <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
            <h1 className="opacity-5 text-[1px]">доставка воздушных шариков в Тюмени</h1>
            <h2 className="text-primary md:text-[80px] max-md:text-xl max-md:mb-2">
              {"BARBALLS 72"}
            </h2>
            <div className="pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
              <p className="text-primary block text-lg font-extrabold">
                {
                  "Мы студия воздушных шаров BARBALLS72 🎈Занимаемся воздушными шарами уже более 3 лет и имеем большой опыт в этом деле! К нам обращаются более 100 клиентов каждый месяц!"
                }
              </p>
              <div className="flex md:mt-8 w-full md:gap-32 gap-24 items-center">
                <span className="text-primary text-lg font-extrabold">
                  {
                    "Мы поможем устроить вам самый лучший праздник 🎊для вашего ребенка или близкого человека! Поможем собрать идеальную композицию по вашему вкусу и не выйдем за рамки бюджета🎉"
                  }{" "}
                  руб.
                </span>
              </div>
              <span className="text-primary text-lg font-extrabold mt-4">
                {"Спасибо что выбрали нас!🌸"}
              </span>
              <Link
                className="text-primary underline text-lg md:mt-8 mt-2 block"
                href="/catalog"
              >
                Перейти в каталог
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
