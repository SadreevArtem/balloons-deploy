import { Product } from "../types";

export const MetaData = {
  title: "Barballs72! Воздушные шары в Тюмени!",
  description: "Воздушные шары в Тюмени с доставкой можно купить в студии Шарбокс. Заказать гелиевые шарики и фигуры как подарок на день рождения и украшение праздника."
};


export const CATEGORIES = [
  {
    id: 1,
    name: "Акции",
    image: "images/categories/category.jpeg",
    href: "/sales",
  },
  {
    id: 2,
    name: "Выписка",
    image: "images/categories/out.jpg",
    href: "/out",
  },
  {
    id: 3,
    name: "Девочке",
    image: "images/categories/girl.jpg",
    href: "/girls",
  },
  {
    id: 4,
    name: "Мальчику",
    image: "images/categories/boy.jpg",
    href: "/boys",
  },
  {
    id: 5,
    name: "Девушке",
    image: "images/categories/girlfriend.jpg",
    href: "/girlfriends",
  },
  {
    id: 6,
    name: "Мужчине",
    image: "images/categories/man.jpg",
    href: "/men",
  },
  {
    id: 7,
    name: "Фотозона",
    image: "images/categories/photozone.jpg",
    href: "/photozones",
  }
]

export const CATALOG = [
  {
    id: 1,
    name: "Акции",
    href: "/sales",
  },
  {
    id: 2,
    name: "Выписка",
    href: "/out",
  },
  {
    id: 3,
    name: "Девочке",
    href: "/girls",
  },
  {
    id: 4,
    name: "Мальчику",
    href: "/boys",
  },
  {
    id: 5,
    name: "Девушке",
    href: "/girlfriends",
  },
  {
    id: 6,
    name: "Мужчине",
    href: "/men",
  },
  {
    id: 7,
    name: "Фотозона",
    href: "/photozones",
  },
];

export const accordeonItems = [
  {
    id: 1,
    name: "Виды лестниц",
    anchor: "top",
    value: [
      "⁃ <strong>Маршевые лестницы</strong> - удобные и практичные, идеально подходят для дома и офиса.",
      "⁃ <strong>Поворотные Г-образные лестницы</strong> - экономят пространство и придают интерьеру изысканность.",
      "⁃ <strong>П-образные лестницы</strong> - функциональные и стильные решения для больших помещений.",
      "⁃ <strong>Лестницы с площадкой</strong> - обеспечивают удобство и безопасность передвижения.",
      "⁃ <strong>Лестницы на швеллере</strong> - прочные и надежные конструкции, подходящие для различных помещений.",
      "⁃ <strong>Лестницы на косоуре</strong> - элегантные и современные, прекрасно вписываются в любой интерьер.",
      "⁃ <strong>Винтовые лестницы</strong> - компактные и эстетичные, идеально подходят для небольших помещений.",
      "⁃ <strong>Лестницы 'гусиный шаг'</strong> - эффективное решение для узких пространств и помещений с ограниченной высотой.",
    ],
  },
  {
    id: 2,
    name: "Места установки",
    anchor: "request",
    value: [
      "⁃ Дом",
      "⁃ Коттедж",
      "⁃ Квартира",
      "⁃ Улица",
      "⁃ Подвал",
      "⁃ Склад",
      "⁃ Магазин",
    ],
  },
  {
    id: 3,
    name: "Почему выбирают нас?",
    anchor: "price",
    value: [
      "<strong>Собственное производство</strong> металлоконструкций",
      "<strong>Бесплатный замер</strong> в удобное для Вас время",
      "<strong>Изготовление лестниц</strong> напрямую от производителя, благодаря чему стоимость ниже на 15-25%",
      "<strong>Индивидуальный подход</strong> - каждый проект разрабатывается с учетом ваших потребностей и предпочтений.",
      "<strong>Качество материалов</strong> - используем только проверенные и долговечные материалы.",
      "<strong>Профессионализм</strong> - наши мастера имеют большой опыт и высокую квалификацию.",
    ],
  },
];

export const reviews = [
  {
    id: 1,
    published: true,
    content: "content",
    text: "Хочу выразить огромную благодарность команде за великолепное украшение нашего праздника воздушными шарами! Все было выполнено с невероятным вкусом и креативностью. Гости были в восторге, а дети не могли оторваться от ярких композиций. Отличная работа и очень профессиональный подход!",
    rating: 5,
    user: {
      work: "домохозяйка",
      image: "/images/avatar1.jpeg",
      lastName: "Иванова",
      firstName: "Дарья",
    },
  },
  {
    id: 2,
    published: true,
    content: "content",
    text: "Мы заказывали украшение шарами на день рождения сына, и результат превзошел все ожидания! Цветовая гамма, композиции и внимание к деталям - все было на высшем уровне. Шары придали мероприятию особую атмосферу праздника и радости. Огромное спасибо за прекрасное настроение!",
    rating: 5,
    user: {
      work: "предприниматель",
      image: "/images/avatar2.jpeg",
      lastName: "Иванов",
      firstName: "Максим",
    },
  },
  {
    id: 3,
    published: true,
    content: "content",
    text: "Потрясающая работа! Украшение воздушными шарами стало настоящим украшением нашего юбилея. Шары были подобраны в идеальной цветовой гамме, а композиции выглядели очень стильно и элегантно. Отдельное спасибо за оперативность и доброжелательность в общении. Рекомендую всем!",
    rating: 5,
    user: {
      work: "домохозяйка",
      image: "/images/avatar3.jpeg",
      lastName: "Иванова",
      firstName: "Дарья",
    },
  },
  {
    id: 4,
    published: true,
    content: "content",
    text: "Заказывали украшение шарами для свадьбы, и это было лучшее решение! Каждая арка, каждая гирлянда была выполнена с такой любовью и вниманием к деталям. Гости не переставали фотографироваться на фоне этих великолепных композиций. Огромное спасибо за сказочную атмосферу нашего праздника!",
    rating: 5,
    user: {
      work: "домохозяйка",
      image: "/images/avatar4.jpeg",
      lastName: "Иванова",
      firstName: "Дарья",
    },
  },
  {
    id: 5,
    published: true,
    content: "content",
    text: "Спасибо большое за ваше искусство и профессионализм! Украшение воздушными шарами сделало наше мероприятие незабываемым. Особенно порадовало то, как вы учли все наши пожелания и предложили интересные решения. Шары были потрясающими, а праздник - ярким и радостным. Обязательно будем обращаться к вам снова!",
    rating: 5,
    user: {
      work: "домохозяйка",
      image: "/images/avatar5.jpeg",
      lastName: "Иванова",
      firstName: "Дарья",
    },
  },
];

export const files = [
{
    alt: "stairs",
    id: 1,
    name: "stairs",
    path: "/images/stairs1.JPG"
  },
  {
    alt: "stairs",
    id: 2,
    name: "stairs",
    path: "/images/stairs2.JPG"
  },
  {
    alt: "stairs",
    id: 3,
    name: "stairs",
    path: "/images/stairs3.JPG"
  },
  {
    alt: "stairs",
    id: 4,
    name: "stairs",
    path: "/images/stairs4.JPG"
  },
  {
    alt: "stairs",
    id: 5,
    name: "stairs",
    path: "/images/stairs5.JPG"
  },
  {
    alt: "stairs",
    id: 6,
    name: "stairs",
    path: "/images/stairs6.JPG"
  },
  {
    alt: "stairs",
    id: 7,
    name: "stairs",
    path: "/images/stairs7.JPG"
  },
  {
    alt: "stairs",
    id: 8,
    name: "stairs",
    path: "/images/stairs8.JPG"
  },
  {
    alt: "stairs",
    id: 9,
    name: "stairs",
    path: "/images/stairs9.JPG"
  },
  {
    alt: "stairs",
    id: 10,
    name: "stairs",
    path: "/images/stairs10.JPG"
  },
  {
    alt: "stairs",
    id: 11,
    name: "stairs",
    path: "/images/stairs11.JPG"
  },
  {
    alt: "stairs",
    id: 12,
    name: "stairs",
    path: "/images/stairs12.JPG"
  }
]