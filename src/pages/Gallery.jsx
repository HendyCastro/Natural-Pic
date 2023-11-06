import { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../context/UserContextProvider";

export default function Gallery() {
  const { photos } = useContext(UserContext);

  return (
    <div className="gallery">
      {photos.map((item) => {
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
  );
}
