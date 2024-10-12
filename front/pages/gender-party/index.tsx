import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";
import { Header } from "@/shared/components/Header/Header";
import { faqsGenderPartyPage, MetaData } from "@/shared/static";
import { Categories } from "@/shared/components/Categories";
import { Faq } from "@/shared/components/Faq/Faq";

export const inter = Poiret_One({ weight: "400", subsets: ["cyrillic"] });

const GenderParty = () => {
  return (
    <>
      <AppHead
        title="шар на гендер пати заказать в Тюмени Barballs72"
        description={MetaData.description}
      />
      <Header />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <h1 className="text-[1px] opacity-5">
          шарик на гендер пати цена в Тюмени
        </h1>
        <div className="md:mt-[60px] mt-16">
          <PageProducts
            title="Гендер - пати"
            category="genderParty"
            className="md:mt-[60px] mt-[46px]"
          />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Faq
            faqs={faqsGenderPartyPage}
            title="Воздушные шары на гендер-пати в Тюмени"
          />
          <div className="container">
            <p>
              Ожидание малыша — радостный и волнительный момент. Всем интересно:
              мальчик или девочка? Когда будущие родители узнают ответ на этот
              вопрос, они часто устраивают гендер-пати — веселый и модный способ
              поделиться радостью с близкими. Это событие можно организовать как
              дома, так и на арендованной площадке. Важным элементом декора на
              таком празднике станут яркие шары с тематическим оформлением,
              которые украсят помещение и будут радовать гостей на протяжении
              нескольких дней.
            </p>
            <h3 className="font-bold my-2">
              Идеи для гендер-пати: что выбрать?
            </h3>
            <p>
              Гендерные вечеринки становятся все популярнее, ведь они дают
              возможность не только весело провести время, но и создать красивые
              воспоминания. Традиция пришла к нам из США, но быстро завоевала
              сердца будущих родителей по всему миру. Часто мама просит врача
              написать пол малыша и положить записку в конверт, чтобы сохранить
              интригу до самого праздника. А раскроют секрет с помощью сладостей
              с начинкой, цветных хлопушек или черного шара, наполненного
              конфетти.
            </p>
            <h3 className="font-bold my-2">
              Шары для праздника: яркий акцент на вашем событии
            </h3>
            <p>
              Чтобы гендер-пати получилось незабываемой, важно создать атмосферу
              праздника. Наши воздушные шары помогут вам сделать это! В нашем
              ассортименте вы найдете множество решений, включая
              коробки-сюрпризы «Boy or Girl» и шары с конфетти. Эти оригинальные
              аксессуары станут отличным подарком для будущих родителей и
              добавят яркости фотосессиям. Среди наших предложений есть
              композиции с пупсом, шарики браш, комплекты «Принцесса или
              Разбойник» и «Мальчик или девочка». Вы легко подберете вариант,
              который идеально подойдет именно вам.
            </p>
            <h3 className="font-bold my-2">
              Как заказать воздушные шары для гендер пати?
            </h3>
            <p>
              Заказать шары для вашего праздника можно по телефону, указанному
              на нашем сайте, или заполнить форму. Наши менеджеры с радостью
              предоставят всю необходимую информацию, помогут выбрать идеальный
              набор и ответят на все вопросы. Мы осуществляем доставку
              круглосуточно — просто укажите удобные для вас дату и время. Шары
              сохраняют полет до 2 и более дней, чтобы ваш праздник был ярким и
              запоминающимся.
            </p>
          </div>
        </div>
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
      </div>
    </>
  );
};

GenderParty.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default GenderParty;
