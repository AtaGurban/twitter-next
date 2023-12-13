import Layout from "@/components/Layout/Layout";
import { SessionProvider } from "next-auth/react";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider>
        <Toaster />
        <LoginModal />
        <RegisterModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
  );
}
