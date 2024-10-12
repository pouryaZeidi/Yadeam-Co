// _app.tsx
import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from '@/components/Theme/ThemeContext';
import { useRouter } from 'next/router';
import ThemeButton from '@/components/Theme/ThemeButton';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const hiddenRoutes = ['/raise','/investment-dashboard'];

  const isHiddenRoute = hiddenRoutes.includes(router.pathname);

  return (
    <ThemeProvider>
      <Layout>
        {!isHiddenRoute && <ThemeButton />}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
