import Head from "next/head";
import { WalletConnectProvider } from "../components/WalletConnectProvider";
import "../styles/global.css";
// Import the solana wallet css
import "@solana/wallet-adapter-react-ui/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectProvider>
      <Head>
        <title>Todo App</title>
      </Head>
      <main>
        {/* Wrap provider around App */}
        <Component {...pageProps} />
      </main>
    </WalletConnectProvider>
  );
}

export default MyApp;
