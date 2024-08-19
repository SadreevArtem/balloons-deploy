import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";
import { AppIcon } from "../AppIcon";
import { useFavoriteStore } from "@/shared/stores/favoriteStore";

type Props ={
    item: {
        id: number;
        name: string;
        image: string;
        currentPrice: number;
    }
}

export const ProductCard: React.FC<Props> = ({item}) => {
  const favoriteIds = useFavoriteStore((state) => state.favorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const isInFavourites = favoriteIds.length >0 && favoriteIds.includes(item.id as never); // TODO: Add logic to check if product is in favourites
  const handleFavorite = (id: number) => {
    isInFavourites ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <>
      <article className="relative max-md:pb-2 shadow-card hover:shadow-cardHover rounded-[10px] flex flex-col md:gap-4 gap-2 items-center shrink-0 bg-[#fafafa] md:w-[220px] md:h-[468px] h-[320px]">
        <Image
          style={{ objectFit: "cover" }}
          alt={item.name}
          src={item.image}
          width={220}
          height={300}
          className=" w-[220px] md:h-[300px] h-[200px] rounded-t-[10px]"
        />

        <span className="text-primary text-lg font-extrabold max-md:px-2">
          {item.name}
        </span>
        <span className="text-primary text-lg font-extrabold max-md:px-2">
          {item.currentPrice} руб.
        </span>
        <Link href={`/catalog/${item.id}`}>
          <Button title="Подробнее" />
        </Link>
        <button
          className="absolute md:top-[24px] md:right-[24px] top-[20px] right-[20px]"
          onClick={() => handleFavorite(item.id as never)}
          disabled={false}
        >
          <AppIcon
            type={isInFavourites ? "favorite-outlined":"favorite" }
            className="z-10 text-purple-600 scale-150"
          />
        </button>
      </article>
    </>
  );
};