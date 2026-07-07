import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { Header } from "@/shared/components/Header/Header";

export const inter = Poiret_One({ weight: "400", subsets: ["cyrillic"] });

const Consent = () => {
  return (
    <>
      <AppHead
        title="Согласие на обработку персональных данных"
        description="Согласие на обработку персональных данных Barballs72"
        showCanonical
        canonicalUrl="https://barballs72.ru/consent"
      />
      <Header />
      <main
        className={`container flex flex-col justify-between ${inter.className}`}
      >
        <article className="pt-[100px] pb-10 w-full text-primary">
          <h1 className="md:text-[64px] max-md:text-2xl max-md:mb-4 leading-tight">
            Согласие на обработку персональных данных
          </h1>
          <div className="mt-6 max-w-[980px] pl-4 text-lg flex flex-col gap-5 max-md:text-base max-md:pl-0">
            <p className="font-extrabold">Дата публикации: 07.06.2026</p>
            <p>
              Настоящим пользователь сайта https://barballs72.ru/, заполняя
              форму оформления заказа и проставляя отметку в поле согласия на
              обработку персональных данных, свободно, своей волей и в своем
              интересе дает согласие оператору персональных данных:
            </p>
            <div>
              <p>
                Меньщикову Егору Викторовичу, физическому лицу, применяющему
                специальный налоговый режим «Налог на профессиональный доход»,
              </p>
              <p>адрес: г. Тюмень, ул. Пермякова, д. 2, стр. 4,</p>
              <p>email: Sofi051214@yandex.ru,</p>
              <p>телефон: +7 (908) 879-19-22,</p>
            </div>
            <p>на обработку своих персональных данных.</p>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                1. Персональные данные, на обработку которых дается согласие
              </h2>
              <p>
                Пользователь дает согласие на обработку следующих персональных
                данных:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>имя;</li>
                <li>номер телефона;</li>
                <li>адрес доставки;</li>
                <li>комментарий к заказу;</li>
                <li>состав заказа;</li>
                <li>
                  иные сведения, самостоятельно указанные пользователем в форме
                  заказа.
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                2. Цели обработки персональных данных
              </h2>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>оформление заказа;</li>
                <li>подтверждение заказа;</li>
                <li>доставка товара;</li>
                <li>связь с пользователем по вопросам заказа;</li>
                <li>исполнение обязательств перед покупателем;</li>
                <li>обработка обращений пользователя.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                3. Действия с персональными данными
              </h2>
              <p>
                Пользователь дает согласие на совершение следующих действий с
                персональными данными:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>сбор;</li>
                <li>запись;</li>
                <li>систематизация;</li>
                <li>накопление;</li>
                <li>хранение;</li>
                <li>уточнение;</li>
                <li>использование;</li>
                <li>передача в случаях, необходимых для исполнения заказа;</li>
                <li>блокирование;</li>
                <li>удаление;</li>
                <li>уничтожение.</li>
              </ul>
              <p>
                Обработка может осуществляться как с использованием средств
                автоматизации, так и без использования таких средств.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                4. Передача персональных данных
              </h2>
              <p>
                Оператор вправе передавать персональные данные третьим лицам
                только в объеме, необходимом для исполнения заказа, работы сайта
                или выполнения требований законодательства.
              </p>
              <p>
                Заявки с сайта направляются на email оператора. Сайт размещается
                у хостинг-провайдера Timeweb.
              </p>
              <p>Доставка заказов осуществляется своими силами оператора.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                5. Срок действия согласия
              </h2>
              <p>
                Настоящее согласие действует с момента его предоставления
                пользователем и до достижения целей обработки персональных
                данных либо до момента отзыва согласия пользователем.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                6. Отзыв согласия
              </h2>
              <p>
                Пользователь вправе в любой момент отозвать настоящее согласие,
                направив обращение на email:
              </p>
              <p>Sofi051214@yandex.ru</p>
              <p>
                После получения отзыва оператор прекращает обработку
                персональных данных, за исключением случаев, когда продолжение
                обработки допускается законодательством Российской Федерации.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-2xl max-md:text-xl font-extrabold">
                7. Подтверждение согласия
              </h2>
              <p>
                Проставляя отметку в форме оформления заказа на сайте
                https://barballs72.ru/, пользователь подтверждает, что:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1">
                <li>ознакомлен с Политикой обработки персональных данных;</li>
                <li>понимает цели и условия обработки персональных данных;</li>
                <li>
                  дает согласие на обработку персональных данных на указанных
                  условиях.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
    </>
  );
};

Consent.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Consent;
