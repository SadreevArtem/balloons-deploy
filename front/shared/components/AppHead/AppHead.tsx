import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description: string;
  image?: string | null;
  showCanonical?: boolean;
  keywords?: string;
};

export const AppHead: React.FC<React.PropsWithChildren<Props>> = ({
  description,
  image,
  title,
  keywords,
  children
}) => {


  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="geo.placename" content="Тюмень" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="BarBalls72 Воздушные шары в Тюмени!" />
      <meta property="og:description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <meta property="og:url" content="https://barballs72.ru/" />
      <link rel="canonical" href="https://barballs72.ru/" />
      {image && <meta property="og:image" content={image} />}
      {children}
    </Head>
  );
};
