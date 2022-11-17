import { Provider as ReduxProvider } from "react-redux";

import store from "../redux/store";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ReduxProvider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </ReduxProvider>
  );
};

export default MyApp;
