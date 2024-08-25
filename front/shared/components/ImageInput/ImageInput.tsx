import {
  AlertColor,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ImageListItemBar,
  Input,
  InputProps,
  TextField
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import React, {
  ChangeEvent,
  forwardRef,
  useEffect,
  useState,
  useId,
} from "react";
import { Text } from "../Text";
import { useModal } from "@/shared/hooks/useModal";
import { FilesModel } from "@/shared/types";
import { getFileName } from "@/shared/lib/getFileName";
import { AppIcon } from "../AppIcon";
import Image from "next/image";

type Props = {
  onChange: (file?: File | null) => void;
  addAlert: (severity: AlertColor, message: string) => void;
  onDelete?: () => void;
  onUpdate: (image: Partial<FilesModel>) => void;
  value?: Partial<FilesModel> | null;
  withPreview?: boolean;
  disabled?: boolean;
  url?: string;
} & Omit<InputProps, "onChange">;

export const ImageInput = forwardRef<HTMLDivElement, Props>(
  (
    {
      onChange,
      onUpdate,
      disabled = false,
      withPreview = true,
      url = "",
      onDelete,
      value,
      addAlert,
      ...other
    },
    ref
  ) => {
    const [selectedImage, setSelectedImage] = useState<File | null>();
    const [imagePreview, setImagePreview] = useState<Partial<FilesModel> | null>(null);
    const [imageUrl, setImageUrl] = useState(url);
    const { open, handleClose, handleOpen } = useModal();

    const id = useId();

    const getHandlerImageClick =
      (image?: Partial<FilesModel> | null): React.MouseEventHandler<HTMLButtonElement> =>
      (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!image) {
          return;
        }
        setImagePreview(image);
        handleOpen();
      };
    const onClose = () => {
      setImagePreview(null);
      handleClose();
    };

    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
        return;
      }
      setImageUrl("");
    }, [selectedImage]);

    // const handleUpdateSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    //   e.preventDefault();
    //   e.stopPropagation();

    //   const target = e.target as typeof e.target & {
    //     name: { value?: string };
    //     alt: { value: string };
    //   };

    //   const newName = target.name.value;
    //   const newAlt = target.alt.value;

    //   onUpdate({
    //     ...value,
    //     name: newName,
    //     alt: newAlt
    //   });
    //   onClose();
    // };

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.webp|\.svg)$/i;

      const filePath = e.target.value;

      if (!allowedExtensions.exec(filePath)) {
        addAlert("error", "Invalid file type");
        return;
      }

      onChange?.(e.target.files?.[0]);
      setSelectedImage(e.target.files?.[0]);
    };

    const handleDeleteImage = () => {
      onDelete?.();
      setSelectedImage(null);
    };

    const isImagePreview = url || (withPreview && imageUrl && selectedImage);

    if (disabled) {
      const hasImage = !!(imageUrl || url);
      return (
        <div className="w-full flex justify-center my-3 h-[200px]">
          {!hasImage && <div className={"text-gray-400"}>Отсутствует</div>}
          {hasImage && (
            <Image
              src={imageUrl || url}
              alt={value?.filename || ""}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
          )}
        </div>
      );
    }
    return (
      <Box ref={ref} className="w-full flex justify-center">
        {!isImagePreview && (
          <Box className="flex items-center relative w-full h-[200px] transition hover:bg-gray-200 rounded-xl border border-dashed border-primary">
            <Input
              inputProps={{
                accept: "image/*",
                className: " w-full h-full opacity-1 z-2 p-0",
              }}
              className="!absolute w-full h-full opacity-0"
              type="file"
              id={id}
              onChange={handleImage}
              {...other}
            />
            <label
              htmlFor={id}
              className="w-full flex flex-col items-center cursor-pointer p-9"
            >
              {/* <Icon className='w-[71px] h-[71px]' component={<AppIcon type="close"/>} /> */}
              <AppIcon type="close" />
              <Text className="pt-5 lg:w-[220px] text-center font-medium text-base">
                Upload or drop image
              </Text>
            </label>
          </Box>
        )}
        {isImagePreview && (
          <Box className="relative lg:w-[220px] text-red-700 p-6">
            <CancelIcon
              onClick={handleDeleteImage}
              onKeyPress={handleDeleteImage}
              tabIndex={0}
              className="absolute right-0 top-0 cursor-pointer"
            />
            <Image
              width={100}
              height={100}
              src={imageUrl || url}
              alt={value?.filename || ""}
              className="object-cover w-full h-full"
            />
            <ImageListItemBar
              title={
                selectedImage
                  ? getFileName(selectedImage?.name)
                  : value?.filename ?? ""
              }
              subtitle={
                <span className="text-gray-300">
                  {value?.originalname ?? ""}
                </span>
              }
              actionIcon={
                <IconButton
                  className="text-white"
                  onClick={getHandlerImageClick(value)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
            <Dialog
              open={!!open}
              onClose={onClose}
              classes={{ paper: "w-[400px]" }}
            >
              <DialogTitle className="flex justify-between gap-2">
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                <Text>Original image</Text>
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  className="flex flex-col gap-4 pt-2"
                  onSubmit={() => console.log("Submit")}
                >
                  <TextField
                    name="name"
                    defaultValue={
                      imagePreview?.filename ?? value?.originalname ?? ""
                    }
                    label={<Text>Title</Text>}
                  />
                  <TextField
                    name="alt"
                    defaultValue={
                      imagePreview?.originalname ?? value?.originalname ?? ""
                    }
                    label={<Text>Alternative text</Text>}
                  />
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
        )}
      </Box>
    );
  }
);

ImageInput.displayName = "ImageInput";
