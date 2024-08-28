export type CategoryName =
  | "discharge"
  | "genderParty"
  | "bacheloretteParty"
  | "forMen"
  | "forWomen"
  | "forGirl"
  | "forBoy"
  | "photozones"
  | "balloonBunches"
  | "latexBalloons"
  | "hearts"
  | "stars"
  | "numbers"
  | "figures"
  | "surpriseBox"
  | "walkingFigures"
  | "ballsCeil"
  | "all"
  | "";

type Category = {
  id: number;
  categoryName: CategoryName;
  value: string;
};

export const category: Category[] = [
    {
      id: 1,
      categoryName: "all",
      value: "Без категории",
    },
    {
      id: 2,
      categoryName: "discharge",
      value: "На выписку",
    },
    {
      id: 3,
      categoryName: "genderParty",
      value: "Гендер - пати",
    },
    {
      id: 4,
      categoryName: "bacheloretteParty",
      value: "Девичник",
    },
    {
      id: 5,
      categoryName: "forMen",
      value: "Мужчине",
    },
    {
      id: 6,
      categoryName: "forWomen",
      value: "Женщине",
    },
    {
      id: 7,
      categoryName: "forGirl",
      value: "Девочке",
    },
    {
      id: 8,
      categoryName: "forBoy",
      value: "Мальчику",
    },
    {
      id: 9,
      categoryName: "photozones",
      value: "Фотозоны",
    },
    {
      id: 10,
      categoryName: "balloonBunches",
      value: "Связки шаров",
    },
    {
      id: 11,
      categoryName: "latexBalloons",
      value: "Латексные шары",
    },
    {
      id: 12,
      categoryName: "hearts",
      value: "Сердца",
    },
    {
      id: 13,
      categoryName: "stars",
      value: "Звезды",
    },
    {
      id: 14,
      categoryName: "numbers",
      value: "Цифры",
    },
    {
      id: 15,
      categoryName: "figures",
      value: "Фигуры",
    },
    {
      id: 16,
      categoryName: "surpriseBox",
      value: "Коробка - сюрприз",
    },
    {
      id: 17,
      categoryName: "walkingFigures",
      value: "Ходячие фигуры",
    },
    {
      id: 18,
      categoryName: "ballsCeil",
      value: "Шары на потолок",
    },
  ];
  
