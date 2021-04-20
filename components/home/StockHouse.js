import House from "../../icons/House";
import Building from "../../icons/Building";
import Garage from "../../icons/Garage";
const StockHouse = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {/* casas displonibles */}
      <div className="flex justify-around rounded-2xl items-center h-16 bg-pink-primary-200 btnStockHouse mb-2">
        <House />
        <div className="flex">
          <h3 className="text-pink-primary-600 font-bold">Casas</h3>
          <h3 className="text-pink-primary-600 font-bold ml-5">10</h3>
        </div>
      </div>
      {/* Departamentos */}
      <div className="flex justify-around rounded-2xl items-center h-16 bg-pink-primary-200 btnStockHouse px-2">
        <Building />
        <div className="flex">
          <h3 className="text-pink-primary-600 font-bold">Departamentos</h3>
          <h3 className="text-pink-primary-600 font-bold ml-2">18</h3>
        </div>
      </div>
      {/* Bodegas */}
      <div className="flex justify-around rounded-2xl items-center h-16 bg-pink-primary-200 btnStockHouse mt-2">
        <Garage />
        <div className="flex ">
          <h3 className="text-pink-primary-600 font-bold">Bodegas</h3>
          <h3 className="text-pink-primary-600 font-bold ml-5">10</h3>
        </div>
      </div>
    </div>
  );
};

export default StockHouse;
