import { AdminPanel } from "@/shared/components/AdminPanel/AdminPanel";
import { AppToast } from "@/shared/components/AppToast";
import { Login } from "@/shared/components/Login/Login";
import { useAuthStore } from "@/shared/stores/auth";
import { Poiret_One } from "next/font/google";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export default function Admin() {
  const token = useAuthStore((state) => state.token);
    const isAuth = !!token;
  return (
    <>
      <div className={`h-[100vh] ${inter.className}`}>
        {!isAuth ? <Login /> : <AdminPanel title="Управление контентом" />}
      </div>
      <AppToast />
    </>
  );
}