import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Favs from "./pages/Favs";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div>
      <Navbar />

      <main>
        <h1 className="text-center text-success p-4">Natural Pic</h1>
        <p className="text-center">
          Haga click en la imagen para agregarla o quitarla de Favoritos
        </p>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favorites" element={<Favs />} />
        </Routes>
      </main>
    </div>
  );
}
