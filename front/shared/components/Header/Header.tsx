import React, { useState } from "react";
import Link from "next/link";
import { scrolltoHash } from "@/shared/lib";
import { AppIcon } from "../AppIcon";
import { inter } from "@/pages";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Hamburger } from "../Hamburger";
import { HEADER_MENU } from "../Hamburger/static";
import clsx from "clsx";
import { useFavoriteStore } from "@/shared/stores/favoriteStore";
import { useCartStore } from "@/shared/stores/cartStore";
import { HeaderSearch } from "../HeaderSearch";
import Image from "next/image";

export const Header: React.FC = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const onOpen = () => {
    setHamburgerActive(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setHamburgerActive(false);
    document.body.style.removeProperty("overflow");
  };
  const favoriteCount = useFavoriteStore((state) => state.favorite.length);
  const cartCount = useCartStore((state) => state.cart.reduce((total, item) => total + item.quantity, 0));
  return (
    <header
      className={`${inter.className} opacity-75 md:p-4 p-3 header-scroll fixed top-0 z-10 bg-white w-full`}
    >
      <div className={"container flex items-center justify-between min-h-6"}>
        <Link href="/" className="relative block shrink-0" aria-label="Главная страница">
          <Image
            src="/images/logo_barballs.svg"
            alt="logo"
            width={130}
            height={100}
            className=" max-md:h-[80px] relative"
          />
          {/* <div className="flex flex-col items-center">
            <span className="md:text-2xl text-xl-2 text-primary font-extrabold">
              Barballs72
            </span>
            <span className="md:text-[10px] text-[8px] text-primary uppercase">
              студия воздушного декора
            </span>
          </div> */}
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="flex md:gap-4 gap-2 items-center">
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("price")}
              >
                <HeaderSearch className="max-md:hidden" />
              </div>
            </li>
            <li>
              <Link className="header-link relative inline-block" href="/favorite" aria-label="Избраное">
                <AppIcon type="favorite" />
                <div
                  className={clsx(
                    { hidden: favoriteCount < 1 },
                    "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 bg-red-400 text-[12px] text-center text-white flex items-center justify-center"
                  )}
                >
                  <span className="">{favoriteCount}</span>
                </div>
              </Link>
            </li>

            <li>
              <Link className="header-link relative inline-block" href="/cart" aria-label="Корзина">
                <AppIcon type="cart" />
                <div
                  className={clsx(
                    "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 bg-red-400 text-[12px] text-center text-white flex items-center justify-center",
                    { hidden: cartCount < 1 }
                  )}
                >
                  <span className="block">{cartCount}</span>
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link className="header-link relative" href={`tel:+79088791922`} aria-label="Позвонить">
                <AppIcon type="phone" className="text-primary" />
              </Link>
              <p className="font-bold max-md:hidden">+7(908)879-19-22</p>
            </li>
            <li className={`self-center ml-6 ${inter.className} max-md:hidden`}>
              <Menu>
                <MenuButton className="flex items-center rounded-md shadow-inner shadow-white/10 focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
                  <div className="flex flex-col gap-1 ">
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                  </div>
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-55 mt-10 origin-top-right rounded-xl border border-white/5 opacity-75 bg-bgColor p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 text-primary"
                >
                  <MenuItem>
                    <Link
                      href="/"
                      aria-label="Главная"
                      className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 ${inter.className}`}
                      onClick={onClose}
                    >
                      Главная
                    </Link>
                  </MenuItem>
                  {HEADER_MENU.map((item) => (
                    <MenuItem key={item.value}>
                      <Link
                      aria-label={item.value}
                        href={item.href}
                        className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 ${inter.className}`}
                        onClick={onClose}
                      >
                        {item.value}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </li>
            <li className={`self-center ml-4 ${inter.className} md:hidden`}>
              <Hamburger
                className="md:hidden"
                menu={HEADER_MENU}
                active={hamburgerActive}
                onOpen={onOpen}
                onClose={onClose}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
