import React, { ReactNode } from "react";
import { clsx } from "clsx";
import { AppIcon } from "../AppIcon";
import { AppSpinner } from "../AppSpinner";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClick?: () => void;
  withClear?: boolean;
  onFocus?: () => void;
  isLoading?: boolean;
  onClickOptionsButton?: () => void;
  optionsIsOpen?: boolean;
  options?: ReactNode;
  className?: string;
};

export const AppInputSearch: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  onClick,
  withClear,
  onFocus,
  isLoading,
  onClickOptionsButton,
  optionsIsOpen,
  options,
  className = ""
}) => {
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onClick?.();
    }
  };

  return (
    <div
      className={clsx(
        "flex items-center min-w-[280px] justify-between h-[44px] rounded-8 p-2 pl-0 border border-gray-4 bg-white gap-2 md:gap-4",
        className
      )}
    >
      <input
        className={clsx(
          "block w-full h-full py-1 lg:py-[2px] pl-4 rounded-l-[32px] bg-white grow",
          "text-black text-sm lg:text-base placeholder:text-gray focus:placeholder:text-transparent"
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
      />
      <div className='flex items-center gap-3'>
        {withClear && value && (
          <button onClick={() => onChange("")}>
            <AppIcon type='close' className='text-primary w-5 h-5' />
          </button>
        )}

        {/* {onClickOptionsButton && (
          <div className='flex items-center'>
            <button className='w-5 h-5' onClick={() => onClickOptionsButton()}>
              <div
                className={clsx(
                  "w-3 h-[2px] bg-primary !hover:bg-primary-dark rounded-full relative transition-all",
                  "before:block before:w-4 before:h-[2px] before:bg-primary before:absolute before:-top-[5px]",
                  "after:block after:w-2 after:h-[2px] after:bg-primary after:absolute after:-bottom-[5px]"
                )}
              />
            </button>
            {optionsIsOpen && options}
          </div>
        )} */}

        <button
          className={clsx(
            "relative flex items-center justify-center w-[52px] h-[28px] rounded-8",
            "bg-primary hover:bg-primary-dark focus:bg-primary-light"
          )}
          title='Поиск'
          onClick={onClick}
        >
          {!isLoading ? (
            <AppIcon type='search' className='text-white' />
          ) : (
            <AppSpinner className='block w-4 h-4' themeType='white' />
          )}
        </button>
      </div>
    </div>
  );
};
