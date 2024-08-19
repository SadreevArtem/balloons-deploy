import { ProductsDetail } from "@/shared/components/ProductsDetail/ProductsDetail";
import { useAuthStore } from "@/shared/stores/auth";
import { Poiret_One } from "next/font/google";
import { useRouter } from "next/router";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export default function ProductPage() {
  const token = useAuthStore((state) => state.token);
    const isAuth = !!token;
    const router = useRouter();
    const id = router.query.id;
    if(!id) return null;
    
  return (
    <>
      <div className={`h-[100vh]${inter.className}`}>
        <ProductsDetail id={id as unknown as number} />
      </div>
    </>
  );
}