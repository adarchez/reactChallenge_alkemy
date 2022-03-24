import InfoBox from "./InfoBox";

const InfoSection = ({ menuPrice, preparationTime, healthScore }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <InfoBox title={"Precio del menú"} info={menuPrice} icon={"fas fa-dollar-sign fa-4x fa-fw"}></InfoBox>
      </div>
      <div className="col-md-4">
      <InfoBox title={"Tiempo de preparación"} info={preparationTime} icon={"fas fa-regular fa-clock fa-4x fa-fw"}></InfoBox>
      </div>
      <div className="col-md-4">
      <InfoBox title={"Health Score"} info={healthScore} icon={"fas fa-regular fa-star fa-4x fa-fw"}></InfoBox>
      </div>
    </div>
  )
}

export default InfoSection;