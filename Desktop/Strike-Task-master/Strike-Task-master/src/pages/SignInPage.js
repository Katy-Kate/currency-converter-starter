import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import {
  validateFuield,
  loginUser,
  saveUserInLocalStorage
} from "../data/UserRepository";
import "../styles/signUpPageStyles.css";
import PropTypes from "prop-types";

class SignInPage extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        password: "0931527094",
        email: "Turalnikova@gmail.com"
      },
      errors: {
        password: false,
        email: false
      },
      userErr: false
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value },
      errors: {
        ...prevState.errors,
        [name]: false
      }
    }));
  };

  handleBlur = input => {
    const inputName = input.target.id;
    let self = this;
    validateFuield(self, inputName);
  };

  validateAllFields = () => {
    const errors = {};
    if (this.state.username <= 4) {
      errors.username = "Must be more then 4 charecters";
    }
    if (this.state.password <= 5) {
      errors.password = "Must be more then 5 charecters";
    }
    if (this.state.repeatPassword !== this.state.password) {
      errors.repeatPassword = "Password must be the same";
    }

    return errors;
  };
  onLogin = e => {
    e.preventDefault();

    const errors = this.validateAllFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      loginUser(this.state.values.password, this.state.values.email)
        .then(user => {
          if (user) {
            this.props.saveUser(user);
            saveUserInLocalStorage(user);
            this.props.toggleIsSignIn();
            this.props.toogleModulWindowForSignIn(false);
          } else {
            this.onChangeuserErr(
              "пользоваьеля с такой почтой или паролем не существует"
            );
          }
        })
        .catch(err => {
          console.log("onLogin err", err);
        });
    }
  };

  onChangeuserErr = err => {
    this.setState({
      userErr: err
    });
  };
  render() {
    const { values, errors } = this.state;
    return (
      <div className="sign-in-page">
        <button
          className="btn-colse-window"
          onClick={() => this.props.toogleModulWindowForSignIn(false)}
        >
          x
        </button>
        <form className="sign-in-form">
          <h3 className="form-title">Войти</h3>
          <UIField
            id="email"
            type="mail"
            placeholderText="Электронная почта"
            name="email"
            value={values.email}
            onChange={this.onChange}
            handleBlur={this.handleBlur}
            error={errors.email}
            classNameWrap="sign-in-group"
            classNameInput="sign-in-field"
          />

          <UIField
            id="password"
            type="password"
            placeholderText="пароль"
            name="password"
            value={values.password}
            onChange={this.onChange}
            handleBlur={this.handleBlur}
            error={errors.password}
            classNameWrap="sign-in-group"
            classNameInput="sign-in-field"
          />

          <button
            type="submit"
            name="Reset"
            className="form-btn"
            onClick={this.onLogin}
          >
            Войти
          </button>
          {this.state.userErr && (
            <div className="sign-in-form_invalid-feedback">
              {this.state.userErr}
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default SignInPage;
SignInPage.propTypes = {
  toggleIsSignIn: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired
};
