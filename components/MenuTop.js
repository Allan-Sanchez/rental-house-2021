const MenuTop = ({title}) => {
  return (
    <div className="w-full h-20 flex  justify-around items-center mt-5">
      <div className=" hidden relative md:flex w-4/12 flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="Buscar Inquilino"
          className="px-3 py-3 placeholder-pink-primary-600 text-blueGray-600 relative  bg-gray-200  text-sm border border-pink-primary-600 outline-none focus:outline-none focus:ring w-full pr-10 rounded-full"
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* <i className="fas fa-user"></i> */}
        </span>
      </div>

      <div className="flex items-center">
        <div className="bg-green-500 rounded-full h-16 w-16 flex justify-center items-center">
          <span className="block text-white text-2xl">AS</span>
        </div>
        <h2 className="ml-5 text-xl">Title</h2>
      </div>
    </div>
  );
};

export default MenuTop;
