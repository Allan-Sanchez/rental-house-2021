import React,{useContext} from 'react';
import { useRouter } from 'next/router'
import TableComponent from "../../components/users/TableComponent";
import {FirebaseContext} from "../../firebase"
const Users = () => {
  const router = useRouter();
  const {firebase} = useContext(FirebaseContext);
  console.log(firebase.auth.currentUser);
  const title = ["id", "nombre","phone", "email", "Acciones"];
  const body = [
    {
      id: 1,
      name: "Allan Sanchez",
      phone:"132141",
      email: "admin@admin.com",
      actions: "rest",
      test: "rest",
    },
    {
        id: 2,
        name: "Allan Sanchez",
        phone:"1231231231",
        email: "admin@admin.com",
        actions: "rest",
        test: "rest",
      },
  ];
  const handleNewUser = () =>{
    router.push('/Users/NewUser')
  }
  return (
    <>
      <div className="w-full flex justify-around">
        <h2 className="text-2xl text-pink-600 my-5 font-bold">Usuarios</h2>
        <div className="h-12 w-40 rounded-2xl bg-pink-primary-600 flex justify-center items-center text-white my-5 cursor-pointer font-bold" onClick={handleNewUser}>
          Nuevo Usuario
        </div>
      </div>
      <div className="w-full">
        <TableComponent title={title} data={body} />
      </div>
    </>
  );
};

export default Users;
