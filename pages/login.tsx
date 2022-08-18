// import styles 
import styles from '../styles/Login.module.css'
// import useFormik hook from formik
import { useFormik } from "formik";
// import everything as yup from yup
import * as Yup from "yup";
// imprt useRouter from next/router package
import { useRouter } from 'next/router'



const login = () => {
  // made a variable named router from useRouter hook
  const router = useRouter()
  // destructuring from useFormik hook
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
  <div className={styles.main_div}>
        <div className={styles.inner_div}>
          {/* form start */}
       <form className={styles.form} onSubmit={handleSubmit}>
        {/* Sign In heading  */}
        <h1 className='text-center'>Sign In</h1>
        {/* Email address input field */}
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
        {/* Password input field */}
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
        {/* Submit Button */}
        <div className="d-grid">
          <button type="submit">
            Submit
          </button>
        </div>
        {/* forgot password option */}
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