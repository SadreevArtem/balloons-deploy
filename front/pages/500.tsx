import Link from "next/link";

export default function Custom500() {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-206px)] md:min-h-[calc(100vh-246px)]">
        <h1>Ошибка сервера</h1>
        <Link className="block underline" href='/'>Обновить страницу</Link>
      </div>
    );
  }