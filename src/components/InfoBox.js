const InfoBox = ({ title, info, icon }) => {
  return (
    <div className="card mb-3 h-100 d-flex justify-content-center">
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 d-flex align-items-center" >
          <i className={icon}></i>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;