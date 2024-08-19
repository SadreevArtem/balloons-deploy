import { CartItem, Product } from "@/shared/types";
import { create } from "zustand";

export type CartState = {
    cart: Array<CartItem> | [];
    addCart: (item: Product) => void;
    removeCart: (item: Product) => void;
    clearCart: () => void;
    deleteItem: (itemId: number) => void;
};

export const useCartStore = create<CartState>(
  (set): CartState => ({
    cart:
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("cart") || "[]")
        : [],
    addCart: (item: Product) =>
      set((state) => {
        const existingProduct = state.cart.find(
          (product) => product.product.id === item.id
        );
        let updatedCart;
        
        if (existingProduct) {
          // Если товар уже есть в корзине, увеличиваем его количество          
          updatedCart = state.cart.map((product) =>
            product.product.id === item.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        } else {
          // Если товара нет в корзине, добавляем его
          updatedCart = [...state.cart, { product: item, quantity: 1 }];
        }
        
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    removeCart: (item: Product) =>
      set((state) => {
        const updatedCart = state.cart.reduce((acc, product) => {
          if (product.product.id === item.id) {
            if (product.quantity > 1) {
              // Уменьшаем количество товара
              acc.push({ ...product, quantity: product.quantity - 1 });
            }
            // Если количество товара равно 1, не добавляем его в новый массив, тем самым удаляем из корзины
          } else {
            acc.push(product);
          }
          return acc;
        }, [] as CartItem[]);
        
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),
    deleteItem: (itemId: number) => set((state) => {
      const updatedCart = state.cart.filter((item) => item.product.id!== itemId);
      window.localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
    clearCart: () =>
      set(() => {
        window.localStorage.removeItem("cart");
        return { cart: [] };
      }),
  })
);
