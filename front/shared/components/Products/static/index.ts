export type CategoryName = 'all' | 'out' | 'girl' | 'boy' | 'girlfriend' | 'men' | 'photozone' | ''

export type Tags =
  | 'Photozone'
  | 'Latex'
  | 'Figure'
  | 'Numbers'
  | 'Stars'
  | 'Hearts'
  | 'Boxes'
  | 'WalkingFigures'
  | 'BunchesBalls';

 export  const customTags = [
   "Photozone",
   "Latex",
   "Figure",
   "Numbers",
   "Stars",
   "Hearts",
   "Boxes",
   "WalkingFigures",
   "BunchesBalls",
 ];

type Category = {
    id: number;
    categoryName: CategoryName;
    value: string;
}

export const category: Category[] = [
    {
        id:1,
        categoryName: 'all',
        value: "Без категории"
    },
    {
        id:2,
        categoryName: 'out',
        value: "На выписку"
    },
    {
        id:3,
        categoryName: 'girl',
        value: "Девочке"
    },
    {
        id:4,
        categoryName: 'boy',
        value: "Мальчику"
    },
    {
        id:5,
        categoryName: 'girlfriend',
        value: "Девушке"
    },
    {
        id:6,
        categoryName: 'men',
        value: "Мужчине"
    },
    {
        id:7,
        categoryName: 'photozone',
        value: "Фотозона"
    },
]