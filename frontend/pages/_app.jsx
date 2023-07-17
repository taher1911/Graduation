import "@/styles/globals.css";
// import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider
      clientId={
        "1038292420096-mdm3aeonk4ihth7nnpftrrnbrbrbci6e.apps.googleusercontent.com"
      }
    >
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
