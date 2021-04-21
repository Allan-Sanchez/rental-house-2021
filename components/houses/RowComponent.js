// import { formatDistanceToNow } from "date-fns";
import React,{useContext} from 'react';
import Swal from "sweetalert2";
import Router from "next/router";
import { FirebaseContext } from '../../firebase'

const RowComponent = ({ title, data }) => {
  const {firebase} = useContext(FirebaseContext);
  const { id } = data;
  const handleDeleteClient = () => {
    Swal.fire({
      title: "Estas Seguro?",
      text: "Si tu eliminas la casa esto sera irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "SI, Eliminalo!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await firebase.db.collection("houses").doc(id).delete();
          Swal.fire("Deleted!", "Elimnado correctamente", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleEditClient = () => {
    //   Router.push({
    //     pathname:'/products/edit/[id]',
    //     query:{
    //       id
    //     }
    //   })
  };

  return (
    <tr className="bg-red-100 lg:hover:bg-  -100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-right sm:text-center border border-b block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[0]}
        </span>
        {data.nis}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[1]}
        </span>

        <span className=" text-gray-800 text-lg ">{data.address}</span>
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center lg:text-right block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          {title[2]}
        </span>
        {data.type == 1 ? ("Casa") : null}
        {data.type == 2 ? ("Departamento") : null}
        {data.type == 3 ? ("Bodega") : null}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-right sm:text-center block lg:table-cell relative lg:static ">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase ">
          {title[4]}
        </span>
        <button
          onClick={() => handleEditClient()}
          className="text-gray-800 bg-green-300  hover:bg-green-400 py-2 px-3 rounded-2xl "
        >
          <span className="hidden sm:inline-block">Editar</span>
        </button>
        <button
          className="text-gray-800  bg-red-300  hover:bg-red-300 py-2 px-3 rounded-2xl ml-2 "
          onClick={() => handleDeleteClient()}
        >
          <span className="hidden sm:inline-block">Eliminar</span>
        </button>
      </td>
    </tr>
  );
};

export default RowComponent;
