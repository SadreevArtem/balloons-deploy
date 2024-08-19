import React from "react";
import Link from "next/link";
import { Socials } from "../Socials/Socials";
import { inter } from "@/pages";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className={`w-full flex flex-col py-4 ${inter.className} md:mt-[60px] mt-4`}>
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
                  { id: 1, name: "social-vk", value: "/" },
                  {
                    id: 2,
                    name: "social-tg",
                    value: "/",
                  },
                  { id: 3, name: "social-youtube", value: "/" },
                  { id: 4, name: "social-ok", value: "/" },
                ]}
              />
              <Link
                href={`tel:+79229998877`}
                className="text-primary w-fit hover:text-hover"
              >
                +7 (922) 222 22 22
              </Link>
              <p className="text-primary w-fit hover:text-hover">
                г. Тюмень ул.Тюменская 999
              </p>
            </div>
          </div>
          <div className="text-primary flex flex-col">
            <h5 className="font-extrabold mb-3">ДЛЯ КОГО</h5>
            <span>Девочкам</span>
            <span>Мальчикам</span>
            <span>Девушкам</span>
            <span>Мужчинам</span>
            <span>Девичник</span>
            <span>На выписку</span>
            <span>Gender part</span>
          </div>
          <div className="text-primary flex  flex-col">
            <h5 className="font-extrabold uppercase mb-3">Категории шаров</h5>
            <span>Фотозоны</span>
            <span>Латексные шары</span>
            <span>Фигуры</span>
            <span>Цифры</span>
            <span>Звезды</span>
            <span>Сердца</span>
            <span>Связки шаров</span>
            <span>Коробки-сюрпризы</span>
            <span>Ходячие фигуры</span>
          </div>
          <div className="text-primary flex flex-col">
            <h5 className="font-extrabold uppercase mb-3">Информация</h5>
            <span>О нас</span>
            <span>Доставка и оплата</span>
            <span>Акции и скидки</span>
            <span>Полезная информация</span>
          </div>
        </div>
      </footer>
    </>
  );
};
