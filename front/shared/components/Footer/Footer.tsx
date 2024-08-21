import React from "react";
import Link from "next/link";
import { Socials } from "../Socials/Socials";
import { inter } from "@/pages";
import { CATALOG, CategoriesMap } from "@/shared/static";

export const Footer: React.FC = () => {
  return (
    <>
      <footer
        className={`w-full flex flex-col py-4 ${inter.className} md:mt-[60px] mt-4`}
      >
        <div className="container grid md:grid-cols-4 md:gap-8 gap-4">
          <div className="flex flex-col gap-6 md:items-center items-start mb-4 md:mb-6">
            <div className="relative flex flex-col md:flex-row gap-6 items-center">
              <Link href="/" className="relative block shrink-0">
                <div className="flex flex-col items-center">
                  <span className="text-2xl text-primary font-extrabold">
                    Barballs72
                  </span>
                  <span className="text-[10px] text-primary uppercase">
                    студия воздушного декора
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col md:items-center gap-2">
              <Socials
                className=""
                socials={[
                  {
                    id: 1,
                    name: "social-vk",
                    value: "https://vk.com/public211798255",
                  },
                  {
                    id: 2,
                    name: "social-tg",
                    value: "https://t.me/Barballs72",
                  },
                ]}
              />
              <Link
                href={`tel:+79088791922`}
                className="text-primary w-fit hover:text-hover"
              >
                +7 (908) 879 19 22
              </Link>
              <p className="text-primary w-fit hover:text-hover">
                г. Тюмень ул. Избышева 6
              </p>
            </div>
          </div>
          <div className="text-primary flex flex-col">
            <h5 className="font-extrabold mb-3">ДЛЯ КОГО</h5>
            {CATALOG.map((item) => (
              <Link href={item.href} key={item.id}>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-primary flex  flex-col">
            <Link href={"/category"}>
              <h5 className="font-extrabold uppercase mb-3">Категории шаров</h5>
            </Link>
            {CategoriesMap.map((item) => (
              <Link href={`/category/${item.categoryName}`} key={item.id}>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="text-primary flex flex-col">
            <h5 className="font-extrabold uppercase mb-3">Информация</h5>
            <Link href={"/about"}>
              <span>О нас</span>
            </Link>

            <span>Доставка и оплата</span>
            <span>Акции и скидки</span>
            <span>Полезная информация</span>
          </div>
        </div>
      </footer>
    </>
  );
};
