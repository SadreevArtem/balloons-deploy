import { AppToast } from "@/shared/components/AppToast";
import { Footer } from "@/shared/components/Footer/Footer";
import { Header } from "@/shared/components/Header/Header";
import React from "react";


export const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen">
      
      <main className='text-black'>{children}</main>
      <Footer />
      <AppToast />
    </div>
  );
};
