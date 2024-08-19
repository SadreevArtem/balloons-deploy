import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { ImagePopup } from "../ImagePopup/ImagePopup";
import { TFilesModel } from "../../ImageGallery";
import { useModal } from "@/shared/hooks/useModal";
import { AppModal } from "@/shared/components/AppModal/AppModal";

type Props = {
  className?: string;
  item: TFilesModel;
  rating?: boolean;
};

export const ImageCard: React.FC<Props> = ({ item, className }) => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <div
        className={clsx(
          "w-[260px] h-[260px] md:w-[348px] md:h-[300px] overflow-hidden",
          "bg-white shadow-base rounded-4 md:rounded-6 p-4 md:p-6 pb-0 group hover:cursor-pointer",
          className
        )}
        onClick={handleOpen}
        aria-hidden
      >
        <div className='flex items-center w-full h-full'>
          <div className='relative w-full h-full'>
            <Image
              src={item.path || "/empty.png"}
              alt={item.name || "picrure"}
              fill
              className='rounded-3 md:rounded-4 object-contain'
            />
          </div>
        </div>
      </div>

      <AppModal isOpen={open} closeHandler={handleClose}>
        <ImagePopup item={item} />
      </AppModal>
    </>
  );
};
