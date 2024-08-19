import Link from "next/link";

export const Contacts = ()=> {
    return (
      <div
        id="contacts"
        className="container flex flex-col justify-between mb-6 md:mb-8"
      >
        <h2 className="text-lg md:text-xl lg:text-2xl  mb-6">Контакты</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href={`tel:+79829895209`}
              className=" w-fit hover:text-hover"
            >
              +7 (982) 989 52 09
            </Link>
          </li>
          <li>
            <Link
              href={`tel:+79323262863`}
              className=" w-fit hover:text-hover"
            >
              +7 (932) 326 28 63
            </Link>
          </li>
          <li>
            <Link
              href={`tel:+7(3452)942772`}
              className=" w-fit hover:text-hover"
            >
              +7 (3452) 94 27 72
            </Link>
          </li>
        </ul>
      </div>
    );
}