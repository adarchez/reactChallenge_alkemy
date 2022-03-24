import React from "react";
import Dish from "./Dish";

const Dishes = ({ data, showDetails, deleteData, newRecord }) => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-4">
          {data.length > 0 ? (
            data.map((el) => (
              <div className="col mt-3" key={el.id}>
                <Dish key={el.id} el={el} showDetails={showDetails} deleteData={deleteData} newRecord={newRecord} card={true}></Dish>
              </div>
            ))
          ) : (
            <p className="fw-bold">No se encontraron platos</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dishes;