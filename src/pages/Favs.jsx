import { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../context/UserContextProvider";

export default function Favs() {
  const { photos, arrayFav } = useContext(UserContext);
  const count = photos.filter((item) => {
    return item.like;
  }).length;

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h2>Favoritos</h2>
        {count === 0 ? (
          <p>No tiene Fotos Favoritas</p>
        ) : (
          <div className="gallery">
            {arrayFav.map((item) => {
              return (
                <Card
                  key={item.id}
                  url={item.url}
                  alt={item.alt}
                  id={item.id}
                  like={item.like}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
