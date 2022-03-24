import { useContext, useState } from "react";
import swal from 'sweetalert';
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const axios = require('axios');

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const {handleAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if(Object.keys(errors).length === 0){
      let url = "http://challenge-react.alkemy.org/";
      setLoading(true);
      axios.post(url, {
        email: form.email,
        password: form.password
      })
      .then(function (response) {
        localStorage.setItem("tokenAuth", response.data.token);
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        handleAuth();
        navigate('/', { replace: true });
      })
      .catch(function (error) {
        let err = error.response.status +" - "+error.response.data.error;
        swal("Error!", err, "error");
        setForm(initialForm);
        setLoading(false);
        setResponse(false);
      });
    }else{
      return;
    }
  }

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit
  }
} 