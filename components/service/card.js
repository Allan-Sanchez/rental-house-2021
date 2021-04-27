const CardServices = () => {
  return (
    <div className="flex flex-col md:flex-row  mb-5">
      <div className="bg-pink-primary-200 p-8 rounded-2xl w-full  xl:w-9/12 mb-2">
        <h3 className="text-2xl text-pink-primary-500 text-center mb-3">
          Walter Delgado Perez
        </h3>
        <div className="grid md:grid-cols-2">
          <div className="mx-auto">
            <img
              className="rounded-full w-28"
              src="/img/avatar-default.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto">
            <ul className="">
              <li className="flex flex-wrap text-gray-700 font-bold mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h4 className="">502 4528-4515</h4>
              </li>
              <li className="flex flex-wrap text-gray-700 font-bold mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-5"
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
                <h4 >example@example.com</h4>
              </li>

              <li className="flex flex-wrap text-gray-700 font-bold mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h4>Canton Calvario</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:ml-5 md:w-3/12 flex items-center">
        <div className="bg-pink-primary-500 rounded-2xl py-4 text-2xl text-white font-bold text-center w-full">
          Mandar Mensaje
        </div>
      </div>
    </div>
  );
};

export default CardServices;
