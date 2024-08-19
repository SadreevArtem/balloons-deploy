import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description: string;
  image?: string | null;
  showCanonical?: boolean;
};

export const AppHead: React.FC<React.PropsWithChildren<Props>> = ({
  description,
  image,
  title,
  children
}) => {


  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ru_RU' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}
      {children}
    </Head>
  );
};
