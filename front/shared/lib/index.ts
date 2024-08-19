import { Validate } from "react-hook-form";

type BaseValidate<FormFields> =
  | Validate<string | undefined, Partial<FormFields>>
  | Record<string, Validate<string | undefined, Partial<FormFields>>>
  | undefined;


export const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  export const getMaskedPhoneValidation = <FormFields>(
    { required }: { required: boolean } = { required: false }
  ) => ({
    ...(Boolean(required) && {required: true}),
    validate: {
      validPhone: (value: string) =>
        value && value.replace(/\D/g, "").length < 11 ? "Некорректный номер телефона" : true
    } as BaseValidate<FormFields>
  });