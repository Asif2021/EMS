// importing useFormik hook 
import { useFormik } from "formik";
// importing everything as yup
import * as Yup from "yup";
// importing useRouter from next/router package
import { useRouter } from 'next/router'
// importing styles from styles
import styles from '../styles/Login.module.css'

const login = () => {
  const router = useRouter()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    // initialValues object containing initial values of the form
    initialValues:{
      email: "",
      password: "",
    },
    // putting validation on the form
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please enter your email"),
      password: Yup.string().min(6).required("Please enter your password"),
   }),
  //  declaring onSubmit function
    onSubmit: (values, action) => {
// routing to the Dashboards
      router.push('/dashboard')
      // resetting the form in empty state
      action.resetForm();
    },
  });
  return (
    <>
  <div className={styles.body_div}>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-4 fw-light fs-5">Sign In</h5>
            {/* form starting here */}
            <form onSubmit={handleSubmit}>
              {/* first input field to get email */}
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete="off"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}/>
                <label>Email address</label>
              {errors.email && touched.email ? (
                <span className={styles.form_error}>{errors.email}</span>
                ) : null}
                </div>
                {/* second input field to get password */}
              <div className="form-floating mb-3">
                <input type="password" className="form-control" placeholder="Password" autoComplete="off"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}/>
                <label>Password</label>
              {errors.password && touched.password ? (
                <span className={styles.form_error}>{errors.password}</span>
                ) : null}
                </div>
{/* remember password option */}
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label">
                  Remember password
                </label>
              </div>
              {/* submit button */}
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr className="my-4"/>
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
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
  )
}

export default login