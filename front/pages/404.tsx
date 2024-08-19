import Link from "next/link";

export default function Custom404() {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-206px)] md:min-h-[calc(100vh-246px)]">
        <h1>Страница не найдена или находится в разработке</h1>
        <Link className="block underline" href='/'>Вернуться на главную</Link>
      </div>
    );
  }