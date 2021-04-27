import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "../firebase";
import Logo from "../icons/Logo";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

export default function Navbar() {
  const router = useRouter();

  const handleRouter = (path) => {
    router.push(path);
  };

  const handleLogout = async () => {
    try {
      await firebase.logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="menu w-72 bg-pink-primary-200 min-h-screen hidden lg:block">
        <div className="w-72 fixed">
          <div
            className="py-5 cursor-pointer"
            onClick={() => handleRouter("/")}
          >
            <Logo className="mx-auto" />
          </div>
          <h2
            className="text-pink-primary-500 text-2xl mx-auto w-full text-center cursor-pointer"
            onClick={() => handleRouter("/")}
          >
            Rental House
          </h2>

          <nav className="">
            <ul className="mt-10">
              <li
                className={`${
                  router.pathname === "/Houses"
                    ? `text-pink-primary-500`
                    : `text-gray-500`
                } h-12 flex justify-center  items-center text-lg w-full px-5 text-gray-500 cursor-pointer`}
                onClick={() => handleRouter("/Houses")}
              >
                <div className="w-2/3 flex justify-end">
                  <div className="w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <span className="w-2/3">Casas</span>
                </div>
              </li>
              <li
                className={`${
                  router.pathname === "/Users/NewUser"
                    ? `text-pink-primary-500`
                    : `text-gray-500`
                } h-12 flex justify-center  items-center text-lg  w-full px-5  cursor-pointer`}
                onClick={() => handleRouter("/Users/NewUser")}
              >
                <div className="w-2/3 flex justify-end">
                  <div className="w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="w-2/3">Usuarios</span>
                </div>
              </li>

              <li
                className={` ${
                  router.pathname === "/Services"
                    ? `text-pink-primary-500`
                    : `text-gray-500`
                } h-12 flex justify-center  items-center text-lg w-full px-5 text-gray-500 cursor-pointer`}
                onClick={() => handleRouter("/Services")}
              >
                <div className="w-2/3 flex justify-end">
                  <div className="w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="w-2/3">Mantenimiento</span>
                </div>
              </li>

              <li
                className={`h-12 flex justify-center  items-center text-lg w-full px-5 text-gray-500 cursor-pointer`}
              >
                <div className="w-2/3 flex justify-end">
                  <div className="w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="w-2/3">Informes</span>
                </div>
              </li>

              <li
                className={`h-12 flex justify-center  items-center text-lg w-full px-5 text-gray-500 cursor-pointer`}
              >
                <div
                  className="w-2/3 flex justify-end cursor-pointer"
                  onClick={handleLogout}
                >
                  <div className="w-1/3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </div>
                  <span className="w-2/3">Cerrar Sesion</span>
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center mt-20">
            <div className="cursor-pointer">
              <Facebook />
            </div>
            <div className="ml-10 cursor-pointer">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <nav className="fixed md:hidden bottom-0 h-12 bg-white w-full z-10">
        <ul className="flex justify-center h-full items-center">
          <li
            className={`${
              router.pathname === "/" ? "border-pink-primary-500" : ""
            } px-4 py-1 border-b-4 `}
          >
            <Link href="/">
              <a href="#">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </li>

          <li
            className={`${
              router.pathname === "/Users/NewUser" ? "border-pink-primary-500" : ""
            } px-4 py-1 border-b-4 `}
          >
            <Link href="/Users/NewUser">
              <a href="#">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </li>

          <li
            className={`${
              router.pathname === "/Services" ? "border-pink-primary-500" : ""
            } px-4 py-1 border-b-4 `}
          >
            <Link href="/Services">
              <a href="#">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </li>

          <li className={`px-4 py-1 border-b-4 `} onClick={handleLogout}>
            <Link href="/clients">
              <a href="#">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
