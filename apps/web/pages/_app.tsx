import type { AppProps } from "next/app";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-red-400 font-bold">
      asdasd
      <Component {...pageProps} />
    </div>
  );
}
