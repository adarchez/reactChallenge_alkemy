import React, { useState, useEffect } from "react";
import Dishes from "./Dishes";
import DishSearch from "./DishSearch";
import InfoSection from "./InfoSection";
import Menu from "./Menu";
import swal from 'sweetalert';
const axios = require('axios');

// const initialDb = [];

// async function getDishes() {
//   let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=bcc0f4881c394a958a1d5c3036937357";
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//     let json = await response.data;
//     console.log(json);
//   } catch (error) {
//     console.error(error);
//     let message = error.response.statusText || "Ocurrió un error";
//     console.error(message);
//   }
// }

const Home = () => {
  const [db, setDb] = useState([]);
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);
  const [healthScore, sethealthScore] = useState(0);

  const newRecord = (record) => {
    if (db.length < 4) {
      let exist = db.filter(el => el.id === record.id);
      if (exist.length === 0) {
        let veganCount = (db.filter(el => el.vegan === true)).length;
        let notVeganCount = (db.filter(el => el.vegan === false)).length;
        if ((record.vegan && veganCount < 2) || (!record.vegan && notVeganCount < 2)) {
          setDb([...db, record]);
          setPrice(price + record.pricePerServing);
          setTime(time + record.readyInMinutes);
          sethealthScore(healthScore + record.healthScore);
        }
        else {
          swal("Error!", "En el menú solo puede haber 2 platos veganos y 2 que no lo sean", "error");
        }
      }
      else{
        swal("Error!", "El plato seleccionado ya se agregó con anterioridad", "error");
      }
    }
    else {
      swal("Error!", "En el menú solo puede haber 4 platos como máximo", "error");
    }
  };

  const deleteRecord = (id) => {
    let isDelete = window.confirm("Estas seguro de eliminar el registro?");

    if (isDelete) {
      let element = db.find((el) => el.id === id);
      setPrice(price - element.pricePerServing);
      setTime(time - element.readyInMinutes);
      sethealthScore(healthScore - element.healthScore);
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }

  // const [showDetails, setShowDetails] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=bcc0f4881c394a958a1d5c3036937357&addRecipeInformation=true";

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(url)
  //     .then(function (response) {
  //       let result = response.data.results;
  //       setDb(result);
  //       setError(null);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       let message = error.response.statusText || "Ocurrió un error";
  //       setDb(null);
  //       setError(error);
  //     });
  // }, [url]);

  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <h1>Menú</h1>
        <InfoSection menuPrice={price} preparationTime={time} healthScore={healthScore}></InfoSection>
        {db && <Menu data={db} deleteRecord={deleteRecord}></Menu>}
        <hr></hr>
        <DishSearch newRecord={newRecord}></DishSearch>
      </div>
    </div>
  );
}

export default Home;