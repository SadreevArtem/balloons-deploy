
import Link from "next/link";


type Props ={
    item: {
        id: number;
        name: string;
        href: string;
    }
}

export const CategoryCard: React.FC<Props> = ({item}) => {
  return (
    <>
      <li className="">
        <Link href={item.href} className="block bg-[#f4e3e3] h-[6em] w-[10em] p-4 shadow-card">
          <span className="text-primary text-lg font-extrabold max-md:px-2">
            {item.name}
          </span>
        </Link>
      </li>
    </>
  );
};