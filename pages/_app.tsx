import "styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "jotai";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
