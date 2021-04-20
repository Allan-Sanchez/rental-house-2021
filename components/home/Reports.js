const Reports = () => {
  return (
    <>
    {/* report btns */}
      <div className="flex justify-between ml-10">
        <div className="w-24 h-14 bg-red-400 rounded-2xl flex justify-center items-center">
          <span className="block text-sm text-white font-bold">Urgente</span>
        </div>
        <div className="w-24 h-14 bg-yellow-400 rounded-2xl flex justify-center items-center">
          <span className="block text-sm text-white font-bold">Importante</span>
        </div>
        <div className="w-24 h-14 bg-green-400 rounded-2xl flex justify-center items-center">
          <span className="block text-sm text-white font-bold">Terminados</span>
        </div>
      </div>
      {/* reports list */}
      <div className="ml-10 mt-5 rounded-3xl h-64 overflow-y-scroll">
        <div className="flex items-center bg-gray-200 rounded-3xl px-5 mb-5">
          <div className="w-3/12 text-pink-primary-600 font-bold text-sm">
            10 min
          </div>
          <div className="w-9/12 pl-2 my-3">
            <h3 className="text-pink-primary-600 font-bold text-md  ">
              Reparar la escaleras.
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, perspiciatis.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 rounded-3xl px-5 mb-5">
          <div className="w-3/12 text-pink-primary-600 font-bold text-sm">
            10 min
          </div>
          <div className="w-9/12 pl-2 my-3">
            <h3 className="text-pink-primary-600 font-bold text-md  ">
              Reparar la escaleras.
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
