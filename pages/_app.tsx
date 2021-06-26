import { ReactElement, useEffect } from "react";
import type { AppProps } from "next/app";
import ThemeProvider from "../components/theme";
import "../styles/globals.css";

function scroll(): void {
  document.documentElement.dataset.scroll = (window.scrollY > 0).toString();
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    scroll();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
