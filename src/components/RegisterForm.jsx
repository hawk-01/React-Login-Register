import React, { Component } from "react";
import { Formik } from "formik";
import Input from "./input";
import * as yup from "yup";
import axios from "axios";

export class RegisterForm extends Component {
  submitted = async (values, actions) => {
    console.log(JSON.stringify(values));

    console.log(values.name);
    const { data } = await axios
      .post("https://z607q.sse.codesandbox.io/api/auth/register", {
        username: values.name,
        email: values.email,
        password: values.password
      })
      .then()
      .catch(err => {
        console.log(err.response.data);
        actions.setStatus({ email: err.response.data });
      });
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={yup.object().shape({
            name: yup.string().required("Name Is A Required Field"),
            email: yup
              .string()
              .email()
              .required("E-mail Is A Required Field"),
            password: yup
              .string()
              .required("Password Is Required")
              .min(8, "Password Must Be Alteast 8 Characters")
          })}
          onSubmit={this.submitted}
          render={({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            status
          }) => (
            <div style={{ fontFamily: "", padding: 100 }}>
              <h1>Sign Up</h1>
              <Input
                id="name"
                lable="Name"
                error={touched.name && errors.name}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
              <Input
                id="email"
                lable="E-mail"
                error={touched.email && errors.email}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
              />
              {status && status.email ? (
                <div style={{ color: "red", margin: "0", padding: "0" }}>
                  {status.email}{" "}
                </div>
              ) : (
                ""
              )}
              <Input
                id="password"
                lable="Password"
                error={touched.password && errors.password}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
              />

              <button
                disabled={
                  Object.keys(errors).length === 0 &&
                  Object.keys(touched).length > 1
                    ? ""
                    : "jh"
                }
                className="mdc-button mdc-button--outlined"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default RegisterForm;
