import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import StoreEntry from "./StoreEntry";

const getCatalogStoreFakeData = [
  {
    nombre: "nombre tienda 1",
    slogan: "slogan tienda 1",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: false,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 2",
    slogan: "slogan tienda 2",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: true,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 3",
    slogan: "slogan tienda 3",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: true,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 3",
    slogan: "slogan tienda 3",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: false,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 4",
    slogan: "slogan tienda 4",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: true,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 5",
    slogan: "slogan tienda 5",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: true,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 6",
    slogan: "slogan tienda 6",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: false,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 7",
    slogan: "slogan tienda 7",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: true,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 8",
    slogan: "slogan tienda 8",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: false,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 9",
    slogan: "slogan tienda 9",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: true,
    numeroVistas: 10,
  },
  {
    nombre: "nombre tienda 10",
    slogan: "slogan tienda 10",
    fechaCierre: "10-02-2022",
    ubicación: "La Ceja, Antioquia. Colombia",
    etiquetas: ["juguetes", "Ropa", "Accesorios", "Libros", "Tecnología"],
    urlTienda: "#",
    estaEnFavorito: false,
    numeroVistas: 10,
  },
];

const StoreEntries = () => {
  //const { stores } = useSelector((state) => state);

  const [stores, setStores] = useState(getCatalogStoreFakeData);

  return (
    <div className="journal__entries">
      {/* {stores.garageSaleStores */}
      {/* stores.sort((store1, store2) => store2.dateEnd - store1.dateEnd) */}
      stores.map(store => (
      <StoreEntry key={store.id} {...store} />
      ))}
    </div>
  );
};

export default StoreEntries;
