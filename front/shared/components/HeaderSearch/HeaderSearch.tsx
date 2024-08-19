import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { AppInputSearch } from "../AppInputSearch";
import { SearchContent } from "./components/SearchContent";
import { AppIcon } from "../AppIcon";

type Props = {
  className?: string;
};


export const HeaderSearch: React.FC<Props> = ({ className = "" }) => {


  const router = useRouter();
  const searchQuery = router.query.name ?? "";
  const isSearchPage = router.asPath.includes("/search?name");

  const [closed, setClosed] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

 

  const handleFocus = () => setClosed(false);
  const handleClose = () => setClosed(true);

  const { ref } = useOutsideClick(handleClose);

  useEffect(() => {
    if (isSearchPage && searchQuery) {
      setSearchValue(searchQuery as string);
      setClosed(true);
    }

    if (!isSearchPage) {
      setSearchValue("");
    }
  }, [isSearchPage, searchQuery]);

  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
  const onClickOptionsButton = () => setOptionsOpen(!optionsOpen);
  const options = (
    <div className='absolute flex flex-col card-base top-[110%] right-[0px] z-[100] p-4 w-full'>
      <div className='flex justify-between'>
        <div className='text-base md:text-lg font-semibold'>Настройка поиска</div>
        <button onClick={() => onClickOptionsButton()}>
          <AppIcon type='close' className='text-white w-5 h-5' />
        </button>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      <div className='relative'>
        <AppInputSearch
          value={searchValue}
          onChange={setSearchValue}
          onClick={()=>console.log('search')}
          onFocus={handleFocus}
          isLoading={false}
          className='relative w-full z-20'
          placeholder='Искать на сайте'
          withClear
          options={options}
          optionsIsOpen={optionsOpen}
          onClickOptionsButton={onClickOptionsButton}
        />

        {searchValue && !closed && (
          <SearchContent
            searchValue={searchValue}
            handleSearchValue={setSearchValue}
            handleClose={handleClose}
            searchTypeIndex={-1}
          />
        )}
      </div>
    </div>
  );
};
