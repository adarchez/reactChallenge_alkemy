import React from "react";
import Dish from "./Dish";

const Menu = ({ data, showDetails, deleteRecord }) => {

  return (
    <div>
      <table className="table table-hover text-center border border-dark mt-3">
        <thead className="table-dark">
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Características</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <Dish key={el.id} el={el} deleteRecord={deleteRecord} card={false}></Dish>
            ))
          ) : (
            <tr>
              <td className="fw-bolder" colSpan="4">No hay platos en el menú, use el buscador para agregar platos.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;