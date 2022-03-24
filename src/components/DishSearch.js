import { useState, useEffect } from "react";
import Dishes from "./Dishes";
import DishForm from "./DishForm";
const axios = require('axios');


const DishSearch = ({ newRecord }) => {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (search === null) return;

    async function getDish() {
      let url = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=bcc0f4881c394a958a1d5c3036937357`;
      setLoading(true);
      try {
        const response = await axios.get(url);
        setResult(response.data.results);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      setLoading(false);
    };

    getDish();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);    
  }

  return (
    <div>
      <h2>Buscador de platos</h2>
      <DishForm handleSearch={handleSearch} loading={loading}></DishForm>
      {search && !loading && 
        <Dishes data={result} showDetails={null} deleteData={null} newRecord={newRecord}></Dishes>
      }
    </div>
  )
}

export default DishSearch;