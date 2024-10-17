import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";
import { AppIcon } from "../AppIcon";
import { useFavoriteStore } from "@/shared/stores/favoriteStore";
import { useRouter } from "next/router";

type Props = {
  item: {
    id: number;
    name: string;
    image: string;
    currentPrice: number;
    description: string; // Добавляем описание товара
    rating?: number; // Рейтинг товара
    reviewCount?: number; // Количество отзывов
  };
};

export const ProductCard: React.FC<Props> = ({ item }) => {
  const { asPath } = useRouter();
  const favoriteIds = useFavoriteStore((state) => state.favorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const isInFavourites = favoriteIds.length > 0 && favoriteIds.includes(item.id as never);
  const handleFavorite = (id: number) => {
    isInFavourites ? removeFavorite(id) : addFavorite(id);
  };
  const href = `${asPath.endsWith("/") ? asPath : `${asPath}/`}${item.id}`;

  return (
    <>
      <article
        itemScope
        itemType="https://schema.org/Product"
        className="relative max-md:pb-2 shadow-card hover:shadow-cardHover rounded-[10px] flex flex-col md:gap-4 gap-2 items-center shrink-0 bg-[#fafafa] md:w-[220px] md:h-[468px] h-[320px]"
      >
        <Image
          style={{ objectFit: "cover" }}
          alt={item.name}
          src={item.image}
          width={220}
          height={300}
          className="w-[220px] md:h-[300px] h-[200px] rounded-t-[10px]"
          itemProp="image"
        />

        <span
          className="text-primary md:text-lg font-extrabold max-md:px-2 overflow-hidden"
          itemProp="name"
        >
          {item.name}
        </span>

        <span
          className="text-gray-700 max-md:px-2 sr-only"
          itemProp="description"
        >
          {item.description}
        </span>
        
        <span
          className="text-primary text-lg font-extrabold max-md:px-2"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content="RUB" />
          <span itemProp="price">{item.currentPrice}</span> руб.
          <link itemProp="availability" href="https://schema.org/InStock" />
        </span>
        
        {/* Рейтинг товара */}
        <div
          itemProp="aggregateRating"
          itemScope
          itemType="https://schema.org/AggregateRating"
          className="sr-only"
        >
          <meta itemProp="ratingValue" content={item.rating?.toString()|| "5"} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="reviewCount" content={item.reviewCount?.toString()||"5"} />
          <span className="text-sm text-gray-500">
            Рейтинг: {item.rating || 5} из 5 ({item.reviewCount} отзывов)
          </span>
        </div>

        <Link href={href} itemProp="url">
          <Button title="Подробнее" />
        </Link>
        <button
          className="absolute md:top-[24px] md:right-[24px] top-[20px] right-[20px]"
          onClick={() => handleFavorite(item.id as never)}
          disabled={false}
          aria-label={isInFavourites ? "Удалить из избранного" : "Добавить в избранное"}
        >
          <AppIcon
            type={isInFavourites ? "favorite-outlined" : "favorite"}
            className="z-10 text-purple-600 scale-150"
          />
        </button>
      </article>
    </>
  );
};
