import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getHouses = () => {
      firebase.db.collection("houses").orderBy('nis').onSnapshot(handleSnapshot);
    };
    getHouses();
  }, []);

  function handleSnapshot(snapshot) {
    const houses = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setHouses(houses);
  }

  return {
    houses,
  };
};

export default useHouses;
