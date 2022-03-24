import React from "react";

const Modal = ({ element }) => {
  let { id, title, healthScore, pricePerServing, readyInMinutes } = element;
  return (
    <div className="modal fade" id={"modal" + id} tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-start">
            <p>Health score {healthScore}</p>
            <p>Price per serving ${pricePerServing}</p>
            <p>Ready in {readyInMinutes} minutes</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;