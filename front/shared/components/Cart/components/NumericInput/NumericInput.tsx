import React, { ChangeEvent } from "react";
import { Box, TextField, TextFieldProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "../Button";
import styles from "./NumericInput.module.css";
import { CartItem } from "@/shared/types";
import { useCartStore } from "@/shared/stores/cartStore";

type Props = {
  max?: number | string;
  min?: number | string;
  value?: number;
  item: CartItem 
} & TextFieldProps;

export const NumericInput: React.FC<Props> = ({
  max = Infinity,
  min = 0,
  value = 0,
  item,
  name,
  ...props
}) => {
  const addCart = useCartStore((state) => state.addCart);
  const removeCart = useCartStore((state) => state.removeCart);
  const handleAdd = () => {
    addCart(item.product);
  };

  const handleRemove = () => {
    removeCart(item.product);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);

    if (
      numericValue > (max as number) ||
      (Number.isInteger(min) && numericValue < (min as number))
    ) {
      return;
    }
  };

  const buttonColor = props.error ? "error" : "primary";

  return (
    <Box>
      <TextField
        variant='outlined'
        className={styles["text-field"]}
        size='small'
        onChange={handleChange}
        {...props}
        InputProps={{
          inputMode: "numeric",
          value: isNaN(value) ? 0 : value,
          endAdornment: (
            <Button
              color={buttonColor}
              onClick={handleAdd}
              className={styles["text-field__button"]}
              size='small'
            >
              <AddIcon />
            </Button>
          ),
          startAdornment: (
            <Button
              color={buttonColor}
              onClick={handleRemove}
              className={styles["text-field__button"]}
              size='small'
            >
              <RemoveIcon />
            </Button>
          ),
          ...props.InputProps
        }}
      />
    </Box>
  );
};
