import React from "react";
import { inter } from "@/pages";
import { CartItemComponent } from "./components/CartItem";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppPhoneInputMasked } from "../AppPhoneInputMasked";
import { getMaskedPhoneValidation } from "@/shared/lib";
import { AppTextField } from "../AppTextField";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/api/api";
import { useRouter } from "next/router";
import { useCartStore } from "@/shared/stores/cartStore";
import Link from "next/link";
import { getErrorMessage } from "@/shared/lib/getError";
import { appToast } from "../AppToast/components/lib/appToast";


type Props = {
  title: string;
  className?: string;
}

export type Order = {
  id?: number;
  name: string;
  phone: string;
  adress: string;
  orderString: string;
  comment: string;
  createdAt: string;
};

type Inputs = Order


export const CartComponent: React.FC<Props> = ({title, className}) => {
  const router = useRouter();

  const clearCart = useCartStore((state) => state.clearCart);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const mutation = useMutation({
    mutationFn: api.createOrder,
    onSuccess: () => {
      appToast.success("Заказ отправлен успешно!");
       router.push("/"), clearCart();
    },
    onError: ()=>{
      appToast.error("Произошла ошибка");
    },
  });
  const getError = getErrorMessage(errors);
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.currentPrice * item.quantity,
    0
  );
  const orderString = cart.reduce(
    (acc, item) => acc + item.product.name + " кол-во: " + item.quantity + "шт.," + "\n",
    ""
  );

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutation.mutate({
      ...data,
      orderString,
    });

  return (
    <>
      <section
        className={`w-full flex flex-col py-4 ${
          (inter.className, className)
        } bg-[#f7f7f7]`}
      >
        <h3 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">
          {title}
        </h3>
        <div className="container flex max-md:flex-col w-full md:gap-8 justify-center">
          <div className=" py-4 flex flex-col md:gap-6 gap-4">
            {!!cart.length ? (
              cart.map((product) => (
                <CartItemComponent item={product} key={product.product.name} />
              ))
            ) : (
              <div className="flex flex-col items-center">
                <h2 className="text-primary text-xl text-center">
                  Корзина пуста
                </h2>
                <Link
                  className="text-primary underline text-lg md:mt-8 mt-2 block"
                  href="/catalog"
                >
                  Перейти к выбору товаров
                </Link>
              </div>
            )}
          </div>
          {!!cart.length && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:w-[30%] py-4 flex flex-col md:gap-6 gap-4"
            >
              <h4 className="text-primary text-xl font-semibold">
                Информация о заказе
              </h4>
              <Controller
                name="name"
                control={control}
                rules={{ required: true, minLength: 2, maxLength: 50 }}
                render={({ field }) => (
                  <AppTextField
                    tag="input"
                    label="Имя"
                    required
                    error={getError("name")}
                    // {...(register("name"), { required: true })}
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <span className="text-red-500">Обязательно для заполнения</span>
              )}
              <Controller
                name="phone"
                control={control}
                rules={getMaskedPhoneValidation({ required: true })}
                render={({ field: { value, onChange } }) => {
                  return (
                    <AppPhoneInputMasked
                      className="w-full"
                      required
                      inputClassName="w-full"
                      value={value}
                      // disabled={isLoading}
                      onChange={onChange}
                      label="Номер телефона"
                      error={getError("phone")}
                    />
                  );
                }}
              />

              <Controller
                name="adress"
                control={control}
                rules={{ required: true, minLength: 2, maxLength: 50 }}
                render={({ field }) => (
                  <AppTextField
                    tag="input"
                    required
                    error={getError("adress")}
                    label="Адрес доставки"
                    // {...(register("adress"), { required: true })}
                    {...field}
                  />
                )}
              />
              {errors.adress && (
                <span className="text-red-500">Обязательно для заполнения</span>
              )}
              <Controller
                name="comment"
                control={control}
                render={({ field }) => (
                  <AppTextField
                    tag="textarea"
                    label="Коментарий"
                    // {...register("comment")}
                    {...field}
                  />
                )}
              />
              <span className="text-primary text-xl">{`Итого: ${totalPrice} руб.`}</span>
              <input
                type="submit"
                className="bg-[#d1baba] text-lg px-4 h-[42px] rounded-2 text-white self-center cursor-pointer"
              />
            </form>
          )}
        </div>
      
      </section>
    </>
  );
};
