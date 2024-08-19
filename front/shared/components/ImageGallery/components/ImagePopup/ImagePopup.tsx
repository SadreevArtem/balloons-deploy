import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { TFilesModel } from "../../ImageGallery";


type Props = {
  item: TFilesModel;
  rating?: number | null;
  className?: string;
};

export const ImagePopup: React.FC<Props> = ({ item, className }) => {
  return (
    <div className={clsx("md:w-[800px] md:h-[800px] h-[320px]", className)}>
      <div className='flex items-center w-full h-full'>
        <div className={clsx("relative w-full h-[90%]")}>
          <Image
            src={item.path || "/empty.png"}
            alt={item.name || "Аватар"}
            fill
            className='rounded-3 md:rounded-4 object-contain'
          />
        </div>
      </div>
    </div>
  );
};
