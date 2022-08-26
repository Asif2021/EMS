import styles from "../styles/login.module.css";
import { LoginDto } from '../models/auth/login.dto';
import { useFormik } from "formik";
import {useRouter} from "next/router";



export default function login() {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues:new LoginDto(),
      validationSchema: LoginDto.yupSchema(),
      onSubmit: (values, action) => {
      router.push('/dashboard');
      action.resetForm();
      },
    });


  return (
    <>
      <div className={styles.body}>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-dark fs-2">
                    Sign In
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="off"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label>Email address</label>
                      {errors.email && touched.email ? (
                        <div className={styles.error}>{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        autoComplete="off"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <div className={styles.error}>{errors.password}</div>
                      ) : null}
                      <label>Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label className="form-check-label">
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn_login text-uppercase fw-bold"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div className="d-grid mb-2">
                      <button
                        className="btn text-uppercase bg-danger fw-bold btn_login text-white"
                        type="submit"
                      >
                        <i className="fab fa-google me-2"></i> Sign in with
                        Google
                      </button>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn bg-primary btn_login text-uppercase fw-bold text-white"
                        type="submit"
                      >
                        <i className="fab fa-facebook-f me-2"></i> Sign in with
                        Facebook
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
