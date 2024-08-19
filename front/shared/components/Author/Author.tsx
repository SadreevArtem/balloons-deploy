import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";


type BannerProps = {
  images: {url: string}[];
};

export const Author: FC<BannerProps> = ({ images }) => {

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const activeBanner = images[activeBannerIndex];
  const imageRef = useRef<HTMLImageElement>(null);

  const onNextBannerIndex = useCallback(() => {
    setActiveBannerIndex((prevState: number) => (prevState === images.length - 1 ? 0 : prevState + 1));
  }, [setActiveBannerIndex, images]);

  useEffect(() => {
    const intervalId = setInterval(onNextBannerIndex, 5000);
    return () => clearInterval(intervalId);
  }, [onNextBannerIndex]);

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-start">
        <div className="h-[60vh]">
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
                priority={true}
                quality={100}
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  );
};
