import Layout from "../components/Layout";
import "../styles/globals.css";
import firebase, { FirebaseContext } from "../firebase";
import useAuthentication from "../hook/useAuthentication";

function MyApp({ Component, pageProps }) {
  const user = useAuthentication();
  return (
    <FirebaseContext.Provider value={{firebase, user}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
