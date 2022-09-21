import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://adservice.google.com" />
        <link rel="preconnect" href="https://adservice.google.com.tr" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://partner.googleadservices.com" />
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
