import "@/styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="wrap">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Provider>
    </>
  );
}
