import { api } from "@/shared/api/api";
import { useAuthStore } from "@/shared/stores/auth";
import { Product } from "@/shared/types";
import { FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { useRouter } from "next/router";
import { CategoryName } from "../Products/static";
import Image from "next/image";
import { appToast } from "../AppToast/components/lib/appToast";


type Props = {
  id: number;
}

type Inputs = Product;


export const ProductsDetail: React.FC<Props> = ({id}) => {
  const isEdit= id.toString() !=="create";
  const queryClient = useQueryClient()
    const getProductById = () => api.getProductById(id);
    const getQueryKey = (id: number) => ['product'].concat(id.toString());
    const router = useRouter();
    const [category, setCategory] = React.useState<CategoryName>('all');
    
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as CategoryName);
  };
   const { data: product, isLoading } = useQuery<Product>({
     queryKey: getQueryKey(id),
     queryFn: getProductById,
     enabled: !!id,
   });
   const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const token = useAuthStore((state) => state.token);
  const updateProductFunc = (input: Product)=> api.updateProduct(input, token);
  const createProductFunc = (input: Product)=> api.createProduct(input, token);
  const mutation = useMutation( {
    mutationFn: isEdit? updateProductFunc : createProductFunc,
    onSuccess: () => {
      appToast.success(isEdit ? "Успешно изменено" : "Успешно добавлено");
      queryClient.invalidateQueries(),
      router.back()
    },
    onError: () => {
      appToast.error("Произошла ошибка");
    },
  })
  const deleteMutation  = useMutation( {
    mutationFn: ()=> api.deleteProduct(id, token),
    onSuccess: () => {
      appToast.success("Успешно удалено");
      queryClient.invalidateQueries(),
      router.back()
    },
    onError: () => {
      appToast.error("Произошла ошибка");
    },
  })
  const onDeleteClick = () => deleteMutation.mutate();
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate({...data, categories: category,oldPrice: +data.oldPrice, currentPrice: +data.currentPrice });
  useEffect(() => {
    if (!product) return;
    Object.keys(product).forEach((key) => {
      if (key in product) {
        setValue(key as keyof Product, product[key as keyof Product] as string);
      }
    });
    setCategory(product.categories);
  }, [product, setValue]);
  return (
    <>
      {!isLoading && (
        <section className="container px-40">
          <div className="flex mt-8 justify-between">
            <h2 className="text-xl">
              {isEdit ? "Редактирование" : "Добавить новый"}
            </h2>
            <Button onButtonClick={() => router.back()} title="Назад"></Button>
          </div>
          <div className="flex justify-between">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:w-[50%] py-4 flex flex-col md:gap-6 gap-4"
            >
              <TextField
                variant="outlined"
                label="Наименование"
                {...register("name")}
              />
              <TextField
                variant="outlined"
                multiline
                label="Описание"
                {...register("description")}
              />
              <TextField
                variant="outlined"
                label="Ссылка на изображение"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-500">Обязательно для заполнения</span>
              )}
              <TextField
                variant="outlined"
                label="Текущая цена"
                {...register("currentPrice", { required: true })}
              />
              {errors.currentPrice && (
                <span className="text-red-500">Обязательно для заполнения</span>
              )}
              <TextField
                variant="outlined"
                label="Старая цена"
                {...register("oldPrice", { required: true })}
              />
              {errors.oldPrice && (
                <span className="text-red-500">Обязательно для заполнения</span>
              )}
              <Controller
                name="isSale"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControlLabel
                    control={<Switch checked={value} />}
                    label="На распродаже"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <Controller
                name="isSelection"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControlLabel
                    control={<Switch checked={value} />}
                    label="На главной странице"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Категория"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>Без категории</MenuItem>
                  <MenuItem value={"out"}>На выписку</MenuItem>
                  <MenuItem value={"girl"}>Девочке</MenuItem>
                  <MenuItem value={"boy"}>Мальчику</MenuItem>
                  <MenuItem value={"girlfriend"}>Девушке</MenuItem>
                  <MenuItem value={"man"}>Мужчине</MenuItem>
                  <MenuItem value={"photozone"}>Фотозона</MenuItem>
                </Select>
              </FormControl>
              <div className="flex gap-4">
                <button
                  className="bg-[#d1baba] text-lg px-4 h-[42px] rounded-2 text-white self-center"
                  type="submit"
                >
                  Сохранить
                </button>
                <button
                  className="bg-[#f59090] text-lg px-4 h-[42px] rounded-2 text-white self-center"
                  type="button"
                  onClick={onDeleteClick}
                >
                  Удалить
                </button>
              </div>
            </form>
            <Image
              className="py-4 w-[240px] h-[360px]"
              alt=""
              src={watch("image")}
              width={300}
              height={20}
            />
          </div>
        </section>
      )}
    </>
  );
};
