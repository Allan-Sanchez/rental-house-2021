import { useFormik } from "formik";
import * as Yup from "yup";
const NewHouse = () => {
  const formik = useFormik({
    initialValues: {
      nis: "",
      type: "",
      address: "",
      detail: "",
    },
    validationSchema: Yup.object({
      nis: Yup.string().required("El NIS es requerido"),
      type: Yup.number("Selecciona un tipo").required(
        "El tipo de casa es requerido"
      ),
      address: Yup.string().required("La direccion es requerida"),
      detail: Yup.string().required("Escrbir al menos un detalle de la casa"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="w-full  flex justify-center mt-5">
      <div className="bg-pink-100 w-11/12 md:w-8/12 lg:w-10/12 flex flex-col items-center rounded-2xl py-5">
        <div className="text-4xl my-2 text-pink-primary-600 font-bold">
          Nueva Casa
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-11/12 lg:w:8/12  flex flex-wrap justify-center  items-center my-3">
            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.nis && formik.errors.nis ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mb-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.nis}</p>
                </div>
              ) : null}
              <input
                type="text"
                placeholder="Codigo NIS"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                autoFocus
                id="nis"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nis}
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
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </span>
            </div>

            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.type && formik.errors.type ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mb-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.type}</p>
                </div>
              ) : null}
              <select
                className="w-full border bg-gray-200 rounded-2xl border-pink-primary-600 px-3 py-3 text-pink-primary-600 outline-none"
                id="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              >
                <option className="py-1" value={1}>
                  Casa
                </option>
                <option className="py-1" value={2}>
                  Departamento
                </option>
                <option className="py-1" value={3}>
                  Bodega
                </option>
              </select>
            </div>

            {/* 2 row */}
            <div className="relative flex w-full lg:w-5/12 flex-wrap items-stretch mb-3 mx-5">
              {formik.touched.address && formik.errors.address ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mb-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.address}</p>
                </div>
              ) : null}
              <input
                type="text"
                placeholder="Escribe la direccion"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                id="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
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
              {formik.touched.detail && formik.errors.detail ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full mb-2 rounded-2xl">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.detail}</p>
                </div>
              ) : null}
              <input
                type="text"
                placeholder="Detalles de la casa"
                className="px-3 py-3 placeholder-pink-primary-600 text-pink-primary-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
                id="detail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.detail}
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

export default NewHouse;
