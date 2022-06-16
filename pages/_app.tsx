import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import { Context } from "../contexts/context";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  const [state, setState] = React.useState({});
  return (
    <Context.Provider value={{state, setState}}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
