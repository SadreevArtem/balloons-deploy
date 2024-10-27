import { Product } from "@/shared/types";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { useCartStore } from "@/shared/stores/cartStore";
import { useCallback } from "react";

type Props = {
  item: Product;
};

export const DetailProductsClient: React.FC<Props> = ({ item }) => {
  const addCart = useCartStore((state) => state.addCart);
  const addCartHandler = useCallback(() => addCart(item), [addCart, item]);

  if (!item) return null;

  return (
    <div className="container md:mt-32 mt-24">
      <div className="flex flex-col md:flex-row justify-end relative">
        <div className="flex relative justify-center items-start border-8 border-[#f9deaf]">
          <div className="relative shadow-lg md:top-[30px] md:right-[-30px] top-[25px] right-[-25px]">
            <Image
              width={560}
              height={750}
              src={item?.image || ""}
              alt={item?.name || ""}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="top-0 left-0 right-0 bottom-0"
            />
          </div>
        </div>
        <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
          <h1 className="text-primary md:text-[80px] max-md:text-xl max-md:mb-2">
            {item?.name}
          </h1>
          <div className="pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
            <p className="text-primary block break-normal">{item?.description}</p>
            <div className="flex md:mt-8 w-full md:gap-32 gap-24 items-center">
              <span className="text-primary text-lg font-extrabold">
                {item?.currentPrice} руб.
              </span>
              <Button onButtonClick={addCartHandler} title="В корзину" />
            </div>
            <Link className="text-primary underline text-lg md:mt-8 mt-2 block" href="/cart">
              Перейти к оформлению заказа
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
