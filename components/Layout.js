import { useRouter } from "next/router";
import Head from "next/head";
import MenuTop from "./MenuTop";
import Navbar from "./Navbar";
import Login from "../pages/Login";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {router.pathname === "/Login" ? (
        <Login />
      ) : (
        <main className="bg-yellow-100 main flex relative ">
          <Navbar />
          {/* container */}
          <div className="w-full bg-gray-50 px-10">
            {/* nav */}
            <MenuTop />
            {/* main */}
            {children}
          </div>
        </main>
      )}
    </>
  );
};
export default Layout;
