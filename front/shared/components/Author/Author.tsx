import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

type BannerProps = {
  images: { url: string }[];
};

export const Author: FC<BannerProps> = ({ images }) => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const activeBanner = images[activeBannerIndex];
  const imageRef = useRef<HTMLImageElement>(null);

  const onNextBannerIndex = useCallback(() => {
    setActiveBannerIndex((prevState: number) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  }, [setActiveBannerIndex, images]);

  useEffect(() => {
    const intervalId = setInterval(onNextBannerIndex, 5000);
    return () => clearInterval(intervalId);
  }, [onNextBannerIndex]);

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-start">
        <div className="h-[60vh] max-md:hidden">
          <SwitchTransition mode="in-out">
            <CSSTransition
              nodeRef={imageRef}
              key={activeBannerIndex}
              timeout={1000}
              className="transition-opacity duration-1000 object-cover"
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exit: "opacity-100",
                exitActive: "opacity-0",
              }}
            >
              <Image
                ref={imageRef}
                src={activeBanner?.url ?? ""}
                alt=""
                fill
                className="w-full"
                priority
                quality={100}
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="md:hidden h-[60vh] w-full">
          <Image
            src={"/images/banner3mob.jpg"}
            alt="Banner"
            className="object-cover w-full"
            fill
            priority
            sizes="100vw"
          />
        </div>
      </div>
      <Link
        className="absolute bottom-[36px] md:bottom-[72px] bg-white opacity-75 rounded-[80px] text-primary md:text-2xl text-lg md:px-16 px-8 md:py-3 py-2 left-1/2 transform -translate-x-1/2"
        href={"/catalog"}
      >
        Каталог
      </Link>
    </div>
  );
};
