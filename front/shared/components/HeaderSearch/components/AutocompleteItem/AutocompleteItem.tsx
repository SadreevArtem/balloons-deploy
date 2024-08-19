import { AppIcon } from "@/shared/components/AppIcon";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  searchValue: string;
  handleSearchValue: Dispatch<SetStateAction<string>>;
  handleClose: () => void;
};

export const AutocompleteItem: React.FC<Props> = ({
  value,
  searchValue,
  handleSearchValue,
  handleClose
}) => {
  const handleClick = () => {
    handleSearchValue(value);
    handleClose();
  };

  return (
    <div
      className='flex items-center gap-[10px] py-1 px-4 cursor-pointer hover:bg-gray-purple'
      aria-hidden
      onClick={handleClick}
    >
      <AppIcon type='search' className='w-6 h-6 text-gray shrink-0' />
      <div className='text-base line-clamp-1'>
        <span className='font-semibold'>{value.slice(0, searchValue.length)}</span>
        {value.slice(searchValue.length, value.length)}
      </div>
    </div>
  );
};
