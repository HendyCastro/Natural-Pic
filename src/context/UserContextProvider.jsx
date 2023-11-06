import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [arrayFav, setArrayFav] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("../fotos.json");
      const data = await response.json();
      const photos = data.photos.map((item) => ({
        id: item.id,
        alt: item.alt,
        like: false,
        url: item.src.medium,
      }));
     
      setPhotos(photos);
      setArrayFav(
        photos.filter((item) => {
          return item.like;
        })
      );
      console.log(arrayFav);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ photos, setPhotos, arrayFav, setArrayFav }}>
      {children}
    </UserContext.Provider>
  );
}
