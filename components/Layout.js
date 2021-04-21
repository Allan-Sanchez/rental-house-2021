import React, { useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MenuTop from "./MenuTop";
import Navbar from "./Navbar";
import Login from "../pages/Login";

import { FirebaseContext } from "../firebase";

const Layout = ({ children }) => {
  const router = useRouter();
  const { user, firebase } = useContext(FirebaseContext);
  // console.log(firebase);
  // console.log(user.displayName);
  if (!user) {
    return <Login />;
  }
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
            <MenuTop title={user.displayName}/>
            {/* main */}
            {children}
          </div>
        </main>
      )}
    </>
  );
};
export default Layout;
