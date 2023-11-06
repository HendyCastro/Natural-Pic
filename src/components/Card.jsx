import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import Heart from "./Heart";

export default function Card({ url, alt, id, like }) {
  const { photos, setPhotos, setArrayFav } = useContext(UserContext);

  const handleClick = (e) => {
    const indexFoto = photos.findIndex((item) => {
      return item.id == e.target.id;
    });
    photos[indexFoto].like = !photos[indexFoto].like;
    setPhotos([...photos]);
    setArrayFav(
      photos.filter((item) => {
        return item.like;
      })
    );
  };

  return (
    <article className="d-flex card flex-column"  >
      <img className="align-self-center" src={url} alt={alt} />
      <span className="heart" onClick={handleClick} >
        <Heart filled={like} id={id} />
      </span>
    </article>
  );
}
