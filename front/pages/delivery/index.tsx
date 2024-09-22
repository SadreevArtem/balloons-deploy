import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";
import Link from "next/link";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Delivery = () => {
  return (
    <>
      <AppHead title="Доставка и оплата" description="" showCanonical canonicalUrl="https://barballs72.ru/about"/>
      <Header />
      <div className={`container flex flex-col justify-between ${inter.className}`}>
        <div className="mt-4">
        <div className=" pt-[100px] w-full">
            <h1 className="text-primary md:text-[80px] max-md:text-xl max-md:mb-2">
              {"Доставка и оплата"}
            </h1>
            <div className="pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
            <h2 className="text-primary block text-xl my-4 font-extrabold">Доставка</h2>
              <p className="text-primary block text-lg font-extrabold">
                {
                  "Доставка шаров осуществляется круглосуточно, в специальных транспортировочных пакетах для безопасной перевозки шаров"
                }
              </p>
              <p className="text-primary block text-lg font-extrabold">Стоимость доставки - от 250₽ в зависимости от адреса и времени, рассчитывается индивидуально</p>
              <p className="text-primary block text-lg font-extrabold">Итоговая стоимость доставки рассчитывается в зависимости от размера заказа, адреса, времени и индивидуальных скидок</p>
              <p className="text-primary block text-lg font-extrabold">Самовывоз с ул. Избышева 6</p>
              <h2 className="text-primary block text-xl mt-4 font-extrabold">Оплата</h2>
              <p className="text-primary block text-lg font-extrabold">Мы работаем по предоплате от 50% итоговой суммы заказа переводом в онлайн банке.Для нас это гарантия того, что Вы будете встречать шары в назначенном месте, в назначенное время
              </p>
              <p className="text-primary block text-lg font-extrabold">Остаток оплачивается при получении шаров
              </p>
              <p className="text-primary block text-lg font-extrabold">Предоплата не возвращается при отмене заказа менее чем за 3 дня</p>
              
             
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
    </>
  );
};

Delivery.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Delivery;