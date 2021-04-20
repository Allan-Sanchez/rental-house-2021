import TableComponent from '../../components/houses/TableComponent';
const Houses = () => {
  const title = ["id", "nombre", "direccion", "tipo", "Acciones"];
  const body = [
    {
      id: 1,
      name: "Allan Sanchez",
      phone: "Canton Calvario",
      email: "Casa",
      actions: "rest",
      test: "rest",
    },
    {
      id: 2,
      name: "Allan Sanchez",
      phone: "Canton Elena",
      email: "Departamento",
      actions: "rest",
      test: "rest",
    },
  ];
  return (
    <>
      <div className="w-full flex justify-around">
        <h2 className="text-2xl text-pink-600 my-5 font-bold">Casas</h2>
        <div className="h-12 w-40 rounded-2xl bg-pink-primary-600 flex justify-center items-center text-white my-5">
          Nueva Casa
        </div>
      </div>
      <div className="w-full">
        <TableComponent title={title} data={body} />
      </div>
    </>
  );
};

export default Houses;
