export type CategoryName =
  | "discharge"
  | "genderParty"
  | "bacheloretteParty"
  | "forMen"
  | "forWomen"
  | "forGirl"
  | "forBoy"
  | "photozones"
  | "surpriseBox"
  | "boxBarbie"
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
      categoryName: "surpriseBox",
      value: "Коробка - сюрприз",
    },
    {
      id: 11,
      categoryName: "boxBarbie",
      value: "Коробка BARBIE",
    },
    {
      id: 12,
      categoryName: "ballsCeil",
      value: "Шары на потолок",
    },
  ];
  
