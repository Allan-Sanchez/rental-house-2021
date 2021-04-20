import Chart from "../components/home/Chart";
import Reports from "../components/home/Reports";
import StockHouse from "../components/home/StockHouse";

export default function Home() {
  return (
    <div className="w-full  flex">
            <div className=" w-full xl:w-2/3">
              <h2 className="text-2xl text-pink-600 my-5">Casas Disponibles</h2>
              <StockHouse />

              <div className="mt-10">
                  <Chart/>
              </div>
            </div>
            <div className="hidden xl:block w-1/3">
              <h2 className="text-center my-5 text-2xl text-pink-primary-600">
                Reportes
              </h2>
              <Reports />

              <div className="bg-pink-primary-600 rounded-2xl h-14 mt-10 ml-10 flex justify-center items-center">
                <span className="block text-white text-2xl font-bold">
                  Pagar
                </span>
              </div>
            </div>
          </div>
  );
}
