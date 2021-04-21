import { useRouter } from "next/router";
import TableComponent from "../../components/houses/TableComponent";
import useHouses from "../../hook/useHouses";
const Houses = () => {
  const router = useRouter();
  const { houses } = useHouses();
  const title = ["NIS", "Direccion", "Tipo", "Acciones"];

  const handleNewHouse = () => {
    router.push("/Houses/NewHouse");
  };
  return (
    <>
      <div className="w-full flex justify-around">
        <h2 className="text-2xl text-pink-600 my-5 font-bold">Casas</h2>
        <div
          className="h-12 w-40 rounded-2xl bg-pink-primary-600 flex justify-center items-center text-white my-5 font-bold cursor-pointer"
          onClick={handleNewHouse}
        >
          Nueva Casa
        </div>
      </div>
      <div className="w-full">
        <TableComponent title={title} data={houses} />
      </div>
    </>
  );
};

export default Houses;
