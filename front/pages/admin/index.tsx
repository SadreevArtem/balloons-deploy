import { AdminPanel } from "@/shared/components/AdminPanel/AdminPanel";
import { AppToast } from "@/shared/components/AppToast";
import { Login } from "@/shared/components/Login/Login";
import { useAuthStore } from "@/shared/stores/auth";
import { Poiret_One } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export default function Admin() {
  const token = useAuthStore((state) => state.token);
  const [isClient, setIsClient] = useState(false);
  const isAuth = /^[a-zA-Z0-9-_]+?\.[a-zA-Z0-9-_]+?\.[a-zA-Z0-9-_]+$/.test(token);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={`h-[100vh] ${inter.className}`}>
        {!isAuth ? <Login /> : <AdminPanel title="Управление контентом" />}
      </div>
      <AppToast />
    </>
  );
}