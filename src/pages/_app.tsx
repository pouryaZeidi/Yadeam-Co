import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@/components/Theme/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}



