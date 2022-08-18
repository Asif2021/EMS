import styles from '../styles/Login.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router'



const login = () => {
  const router = useRouter()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please enter your email"),
      password: Yup.string().min(6).required("Please enter your password"),
   }),
    onSubmit: (values, action) => {
       router.push('/dashboard')
      action.resetForm();
    },
  });
  
  return (
    <>
  <div className={styles.main_div}>
        <div className={styles.inner_div}>
       <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className='text-center'>Sign In</h1>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
                      <span className={styles.form_error}>{errors.email}</span>
                    ) : null}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            autoComplete="off"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           {errors.password && touched.password ? (
                      <span className={styles.form_error}>{errors.password}</span>
                    ) : null}
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>

        </div>

        </div>
        </>
  )
}

export default login