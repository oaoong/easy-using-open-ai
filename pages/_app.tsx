import type { AppProps } from "next/app";
import Layout from "@/src/theme/Layout";

import "@/styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
