import { Provider as ReduxProvider } from "react-redux";

import ErrorBoundary from "../components/ErrorBoundary";
import store from "../redux/store";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </ReduxProvider>
    </ErrorBoundary>
  );
};

export default MyApp;
