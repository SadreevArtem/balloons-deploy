import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";
import Link from "next/link";
import { Categories } from "@/shared/components/Categories";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Useful = () => {
  return (
    <>
      <AppHead title="Полезная информация" description="" />
      <Header />
      <div className={`container flex flex-col justify-between ${inter.className}`}>
        <div className="mt-4">
        <div className=" pt-[100px] w-full">
            <h1 className="text-primary md:text-[80px] max-md:text-xl max-md:mb-2">
              {"Рекомендации"}
            </h1>
            <div className="pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
            <h2 className="text-primary block text-xl my-4 font-extrabold">Рекомендации для долгого полета шаров</h2>
              <p className="text-primary block text-lg font-extrabold">
                {
                  "Не держите шары на сквозняке, около кондиционера или увлажнителя"
                }
              </p>
              <p className="text-primary block text-lg font-extrabold">Не дергайте шары за ленты и избегайте ударов, физического воздействия, горячих лампочек и шершавых потолков
              </p>
              <p className="text-primary block text-lg font-extrabold">Избегайте попадания прямых солнечных лучей и сильного ветра</p>
              <p className="text-primary block text-lg font-extrabold"> Избегайте резкого попадания из холода в жару</p>

              <p className="text-primary block text-lg font-extrabold">Не храните шары в машине и транспортировочном пакете или пыльном помещении</p>
              <p className="text-primary block text-lg font-extrabold">Шары с конфетти, индивидуальными надписями и кисточками летают меньше из-за дополнительного веса</p>
              
             
              <Link
                className="text-primary underline text-lg md:mt-8 mt-2 block"
                href="/catalog"
              >
                Перейти в каталог
              </Link>
              <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Useful.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Useful;