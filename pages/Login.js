import React,{useState} from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import {useRouter} from 'next/router';
import firebase from "../firebase"
import Logo from "../icons/Logo";
import AlertMessage from '../components/AlertMessage';

export default function Login() {
   const [message, getMessage] = useState(null);
  const [messageInfo, getMessageInfo] = useState({});
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Escribe un correo valido")
        .required("El correo es requerido"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracters")
        .required("La contraseña es requerida"),
    }),
    onSubmit: async (values) => {
      let {email,password} = values
      try {
        await firebase.login(email,password)
        router.push('/')
      } catch (error) {
       getMessage(true);
        getMessageInfo({
          typeError: "Error",
          message: "La contraseña o el correo no son correctos",
        });
        console.log(error);
      }
    },
  });
  return (
    <>
     {message ? (<AlertMessage messageInfo={messageInfo}/>) : null}
    <div className="bg-pink-primary-200 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-8/12 lg:w-4/12 flex flex-col items-center rounded-2xl py-10">
        <div>
          <Logo />
        </div>
        <div className="text-4xl my-5 text-pink-primary-600 font-bold">
          Bienvenido
        </div>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex flex-col items-center my-3">
            <div className="relative flex w-8/12 flex-wrap items-stretch mb-3">
              <input
                type="email"
                id="email"
                placeholder="Escribe tu Correo Electronico"
                className="px-3 py-3 placeholder-pink-primary-600 text-blueGray-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mt-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}

              <span className="z-10 h-full leading-snug font-normal absolute text-center  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-primary-600"
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
            </div>

            <div className="relative flex w-8/12 flex-wrap items-stretch mb-3">
              <input
                type="password"
                id="password"
                placeholder="Escribe tu contraseña"
                className="px-3 py-3 placeholder-pink-primary-600 text-blueGray-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mt-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
              <span className="z-10 h-full leading-snug font-normal absolute text-center  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="h-12 w-8/12 bg-pink-primary-600 text-white rounded-2xl flex justify-center items-center text-2xl font-bold"
          >
            Iniciar Sesion
          </button>
        </form>

        <div className="w-8/12 mt-5">
          <h4 className="text-gray-600 text-center">
            Si no tienes un usario por favor ponte en contacto con
            administrasion
          </h4>
        </div>
      </div>
    </div>
    </>
  );
}
