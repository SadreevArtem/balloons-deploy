import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { HeaderMenuItem } from "../Hamburger/static";

type Props = {
  menu: HeaderMenuItem[];
  onClose: () => void;
  className?: string;
};

export const HamburgerMenu: React.FC<Props> = ({ menu, onClose, className = "" }) => {
  const { asPath } = useRouter();
  const paths = asPath.split("/");  
  const listItemClassName = "mb-1 last:mb-0 py-2 px-4 rounded-2";

  return (
    <div className={clsx("fixed z-40 top-[68px] right-0 left-0 bottom-0 bg-white opacity-90", className)}>
      <div className='container max-h-full pt-1 pb-3 overflow-y-auto'>

        <nav>
          <ul className="pt-4">
            <li
              className={clsx(listItemClassName, {
                "bg-bgOpacity": paths[1] === ""
              })}
            >
              <Link href='/' className='block w-full text-lg text-primary font-extrabold' onClick={onClose}>
                Главная
              </Link>
            </li>
            {menu.map((item) => (
              <li
                key={item.value}
                className={clsx(listItemClassName, {
                  "bg-bgOpacity": asPath.includes(`${item.href}`)
                })}
              >
                <Link href={item.href} className={clsx("block w-full text-lg text-primary font-extrabold")} onClick={onClose}>
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
