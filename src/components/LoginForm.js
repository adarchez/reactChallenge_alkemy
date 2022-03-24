import { useForm } from "../hooks/useForm";

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido";
  }

  return errors;
};

const LoginForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="container text-center">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="p-5 col-auto bg-light border rounded row justify-content-center">
          <h2 className="mb-4">Ingresar</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating form-group mt-2">
              <input
                id="floatingInputEmail"
                className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email} 
                required >
              </input>
              <label htmlFor="floatingInputEmail">Email</label>
            </div>
            {errors.email && <p className="text-danger">{errors.email}</p>}
            <div className="form-floating form-group mt-2">
              <input
                id="floatingInputPassword"
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password} 
                required >
              </input>
              <label htmlFor="floatingInputPassword">Contraseña</label>
            </div>
            {errors.password && <p className="text-danger">{errors.password}</p>}
            {loading && <button className="btn btn-primary mt-2 col-md-12" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Cargando...
            </button>
            }
            {!loading && <input className="btn btn-primary mt-2 col-md-12" type="submit" value="Enviar"></input>}
          </form>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;