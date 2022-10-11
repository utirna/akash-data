import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
let Login = () => {
  let initialValues = { username: "", password: "" };
  let onSubmit = (values) => {
    console.log(values);
  };
  let validationSchema = yup.object({
    username: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Enter Username"),
    password: yup
      .string()
      .max(20, "Must be 20 characters or less")
      .required("Enter password"),
  });

  return (
    <>
      {/* header start */}
      <header id="header">
        <div className="system-name">
          <h1 className="text-center">Venue Audit Panel</h1>
        </div>
      </header>
      {/* header close */}

      {/* form start */}
      <div id="main-site">
        <div className="container">
          <h1 className="text-dark text-center">
            Login <span>Auditor</span>
            <Link to="/user-list">User List</Link>
          </h1>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="username" className="text-dark">
                  Username
                </label>
                <Field type="text" name="username" />
                <ErrorMessage
                  name="username"
                  className="error"
                  component="span"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-dark">
                  Password
                </label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  className="error"
                  component="span"
                />
              </div>
              <div className="form-group">
                <button className="btn-login text-dark" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      <footer>
        <div className="footer">
          <p className="text-center">
            <span>&#169; Copyrights 2022</span> Audit Panel{" "}
          </p>
        </div>
      </footer>
      {/* Footer End  */}
    </>
  );
};
export default Login;
