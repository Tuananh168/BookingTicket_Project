import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";
import { NavLink, unstable_HistoryRouter, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { createBrowserHistory } from "history";
const Login = (props) => {
  const dispatch = useDispatch();
  const history = createBrowserHistory();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // validationSchema: Yup.object({
    //   taiKhoan: Yup.string()
    //     .email("Email không đúng định dạng")
    //     .required("Bắt buộc : Không được bỏ trống"),
    //   matKhau: Yup.string()
    //     .min(8, "Mật khẩu phải nhiều hơn 8 ký tự")
    //     .required("Bắt buộc : Không được bỏ trống"),
    // }),
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("value", values);
    },
  });

  // console.log("formik", formik.values);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="h-full gradient-form bg-gray-200 md:h-screen"
    >
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                        alt="logo"
                      />
                      {/* <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        We are CyberSoft
                      </h4> */}
                    </div>
                    <div className="mt-10">
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.taiKhoan}
                          name="taiKhoan"
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                        {/* {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                          <p className="text-red-600 italic">
                            {formik.errors.taiKhoan}
                          </p>
                        )} */}
                      </div>
                      <div className="mb-4">
                        <input
                          name="matKhau"
                          onChange={formik.handleChange}
                          value={formik.values.matKhau}
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                        {/* {formik.errors.matKhau && formik.touched.matKhau && (
                          <p className="text-red-600 italic">
                            {formik.errors.matKhau}
                          </p>
                        )} */}
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          onClick={() => history.push("/home")}
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right,#ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <NavLink
                          to="/register"
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Register
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;