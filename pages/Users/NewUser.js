import { useFormik } from "formik";
import * as Yup from "yup";
import Router from "next/router";
import firebase from "../../firebase";
const NewUser = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      email: Yup.string()
        .email("Escribe un correo valido")
        .required("El correo es requerido"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracters")
        .required("La contraseña es requerida"),
      confirmPassword: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracters")
        .required("La contraseña es requerida"),
    }),
    onSubmit: async (values) => {
      let { password, confirmPassword } = values;
      if (password !== confirmPassword) {
        return;
      }
      try {
        await firebase.register(values.name, values.email, password);
        Router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="w-full  flex justify-center mt-5">
      <div className="bg-pink-100 w-11/12 md:w-8/12 lg:w-10/12 flex flex-col items-center rounded-2xl py-5">
        <div className="text-4xl my-2 text-pink-primary-600 font-bold">
          Nuevo Usuario
        </div>
        <div>
          <img
            className="rounded-full w-28 h-28"
            src={"/img/avatar-default.jpg"}
            alt="avatar"
          />
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-11/12 lg:w:8/12  flex flex-wrap justify-center  items-center my-3">
            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.name && formik.errors.name ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mb-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.name}</p>
                </div>
              ) : null}
              <input
                type="text"
                placeholder="Escribe tu nombre de Usuario"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                autoFocus
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />

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

            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.email && formik.errors.email ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mb-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
              <input
                type="email"
                placeholder="Escribe tu email"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
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
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            {/* 2 row */}
            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.password && formik.errors.password ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mt-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
              <input
                type="password"
                placeholder="Escribe tu contraseña"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
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

            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mt-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.confirmPassword}</p>
                </div>
              ) : null}
              <input
                type="password"
                placeholder="Confirma tu contraseña"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
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
            className="h-12 w-10/12 lg:w-4/12 bg-pink-primary-600 text-white rounded-2xl flex justify-center items-center text-2xl font-bold"
          >
            Guardar Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
