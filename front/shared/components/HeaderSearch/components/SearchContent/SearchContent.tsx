import React, { Dispatch, SetStateAction } from "react";
import { clsx } from "clsx";
import { AppSpinner } from "@/shared/components/AppSpinner";
import { PreliminarySearchItem } from "../PreliminarySearchItem";
import { api } from "@/shared/api/api";
import { Product } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";


type Props = {
  searchValue: string;
  handleSearchValue: Dispatch<SetStateAction<string>>;
  handleClose: () => void;
  searchTypeIndex?: number;
};

export const SearchContent: React.FC<Props> = ({
  searchValue,
  handleSearchValue,
  handleClose,
}) => {
  const getProducts = (searchValue: string) => api.searchProducts(searchValue);
   const { data: products = [], isLoading } = useQuery<Product[]>({
     queryKey: ["search_products", searchValue],
     queryFn: () => getProducts(searchValue),
   });   
  const autocomplete  = products ?? [];

  const handleClear = () => {
    handleSearchValue("");
  };

  return (
    <div
      className={clsx(
        "bg-white shadow-base rounded-t-8 rounded-b-3 pt-[52px] pb-4",
        "absolute top-0 inset-x-0 z-10"
      )}
    >
      <div className='flex flex-col gap-2 max-h-[304px] overflow-y-auto'>
        {isLoading && (
          <div className='flex items-center justify-center w-full h-12'>
            <AppSpinner className='block w-5 h-5' themeType='primary' />
          </div>
        )}

        {!isLoading && autocomplete?.length === 0 && (
          <div className='h-12 flex items-center justify-center text-gray text-sm'>
            Нет результатов
          </div>
        )}

        {/* {!isLoading &&
          tips?.map((item, index) => (
            <AutocompleteItem
              key={`${item.name}-${index}`}
              value={item.name ?? ""}
              searchValue={searchValue}
              handleSearchValue={handleSearchValue}
              handleClose={handleClose}
            />
          ))} */}

        {!isLoading &&
          autocomplete?.map((item, index) => (
            <PreliminarySearchItem
              key={`${item.name}-${index}`}
              title={item.name ?? ""}
              imageUrl={item.image}
              serviceName={""}
              href={`/catalog/${item.id}` ?? ""}
              onClick={handleClear}
            />
          ))}
      </div>
    </div>
  );
};
