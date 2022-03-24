import { Formik, Field, Form, ErrorMessage } from 'formik';

const DishForm = ({ handleSearch, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          dish: '',
        }}
        validate={(values) => {
          let errors = {};
          if (!values.dish) {
            errors.dish = "Ingrese el nombre del plato";
          } else if (values.dish.length < 3) {
            errors.dish = "Ingrese al menos 3 caracteres para buscar";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          handleSearch(values.dish);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="row row-cols-lg-auto g-3 align-items-center mt-2">
              <div className="col-12">
                <Field className="form-control" id="dish" name="dish" placeholder="Ingrese un plato" />
              </div>
              <div className="col-12">
                {loading && <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Cargando...
                </button>
                }
                {!loading && <button className="btn btn-primary" type="submit">Buscar</button>}
              </div>
            </div>
            {touched.dish && errors.dish && <ErrorMessage className="mt-2" name="dish"></ErrorMessage>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DishForm;