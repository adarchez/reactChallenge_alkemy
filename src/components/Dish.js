import React from "react";
import Modal from "./Modal";

const Dish = ({ el, deleteRecord, newRecord, card }) => {

  let { id, title, image, healthScore, pricePerServing, readyInMinutes } = el;

  if (card) {
    return (
      <div className="card h-100">
        <img className="card-img-top img-fluid img-thumbnail" src={image} alt={image} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5><hr></hr>
          <p className="card-text">Health score: {healthScore}</p>
          <p className="card-text">Price per serving ${pricePerServing}</p>
          <p className="card-text">Ready in {readyInMinutes} minutes</p>
        </div>
        <div className="card-footer d-grid gap-2 col-12 mx-auto">
          <button type="button" className="btn btn-primary m-2" onClick={() => newRecord(el)}>Agregar</button>
        </div>
      </div>
    )
  }
  else {
    return (
      <>
        <tr>
          <td>
            <img className="img-fluid img-thumbnail w-50" src={image} alt={image} />
          </td>
          <td><p className="fw-bold">{title}</p></td>
          <td className="text-start">
            <p>{ el.vegetarian ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } Vegetarian</p>
            <p>{ el.vegan ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } Vegan</p>
            <p>{ el.glutenFree ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } GlutenFree</p>
            <p>{ el.dairyFree ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } DairyFree</p>
            <p>{ el.veryHealthy ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } VeryHealthy</p>
            <p>{ el.cheap ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } Cheap</p>
            <p>{ el.sustainable ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } Sustainable</p>
            <p>{ el.veryPopular ? <i className="fas fa-regular fa-check text-success"></i> : <i className="fas fa-regular fa-times text-danger"></i> } VeryPopular</p>
          </td>
          <td>
            <button className="badge bg-primary m-1" type="button" data-bs-toggle="modal" data-bs-target={"#modal" + id}>Detalles</button>
            <button className="badge bg-danger m-1" onClick={() => deleteRecord(id)}>Eliminar</button>
          </td>
        </tr>
        <Modal element={el}></Modal>
      </>
    )
  }
}

export default Dish;

