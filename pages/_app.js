import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      try {
        if (window) {
          window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: url,
          });
        }
      } catch (error) {
        console.log("Error from the trackerPageView => ", error);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=UA-241121846-1"
      />
      <Script strategy="lazyOnload" id="ga-analytics">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-241121846-1');`}
      </Script>
    </>
  );
}

export default MyApp;
