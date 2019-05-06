import React, { Component } from "react";
import UIField from "../components/UiComponents/UIField";
import UIRadioBtn from "../components/UiComponents/UIRadioBtn";
import {
  addNewUserToLocalStorage,
  validateFuield
} from "../data/UserRepository";
import "../styles/signUpPageStyles.css";
import PropTypes from "prop-types";

const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
const regExpMobile = new RegExp("[0-9()+]{9,}");

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "муж",
        email: "",
        mobile: "",
        _id: Math.floor(Math.random(0, 1) * 100000000)
      },
      errors: {
        firstname: null,
        lastname: null,
        password: null,
        repeatPassword: null,
        email: null,
        mobile: null
      }
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

  updateError = (inputName, err) => {
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [inputName]: err
      }
    }));
  };
  validateAllFields = () => {
    const errors = {};
    if (this.state.values.firstname <= 4) {
      this.state.values.firstname === ""
        ? (errors.firstname = "Not empty")
        : (errors.firstname = "Must be more then 4 charecters");
    }
    if (this.state.values.lastname <= 4) {
      this.state.values.lastname === ""
        ? (errors.lastname = "Not empty")
        : (errors.lastname = "Must be more then 4 charecters");
    }
    if (this.state.values.password <= 5) {
      this.state.values.password === ""
        ? (errors.password = "Not empty")
        : (errors.password = "Must be more then 5 charecters");
    }

    if (this.state.values.repeatPassword !== this.state.values.password) {
      errors.repeatPassword = "Password must be the same";
    }

    if (!regExpMobile.test(this.state.values.mobile)) {
      errors.mobile = "Invalid mobile";
    }
    if (this.state.values.mobile.length <= 4) {
      this.state.values.mobile === ""
        ? (errors.mobile = "Not empty")
        : (errors.mobile = "Must be more then 4 charecters");
    }

    if (!regExpMail.test(this.state.values.email)) {
      errors.email = "Invalid email address";
    }
    if (this.state.values.email.length <= 4) {
      this.state.values.email === ""
        ? (errors.email = "Not empty")
        : (errors.email = "Must be more then 4 charecters");
    }
    return errors;
  };
  onSubmit = () => {
    addNewUserToLocalStorage(this.state.values);
    this.props.toggleIsSignUp();
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
      this.onSubmit();
    }
  };

  render() {
    const { values, errors } = this.state;
    if (this.props.isSignUp) {
      return (
        <div className="sign-up-page">
          <p>Пользователь зарегестрирован. Войдите в систему!</p>
          <button onClick={() => this.props.toogleModulWindowForSignUp(false)}>
            Ok
          </button>
        </div>
      );
    } else {
      return (
        <div className="sign-up-page">
          <button
            className="btn-colse-window"
            onClick={() => this.props.toogleModulWindowForSignUp(false)}
          >
            x
          </button>
          <form className="sign-up-form">
            <h3 className="form-title">Создать аккаунт</h3>
            <UIField
              id="firstname"
              type="text"
              placeholderText="Имя"
              name="firstname"
              value={values.firstname}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.firstname}
              classNameWrap="sign-up-group"
              classNameInput="sign-up-field"
            />
            <UIField
              id="lastname"
              type="text"
              placeholderText="Фамилия"
              name="lastname"
              value={values.lastname}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.lastname}
              classNameWrap="sign-up-group"
              classNameInput="sign-up-field"
            />

            <fieldset className="form-group">
              <div>Пол</div>
              <UIRadioBtn
                type="radio"
                name="gender"
                id="male"
                value="муж"
                onChange={this.onChange}
                checked={values.gender === "муж"}
              />
              <UIRadioBtn
                type="radio"
                name="gender"
                id="female"
                value="жен"
                checked={values.gender === "жен"}
                onChange={this.onChange}
              />
            </fieldset>
            <UIField
              id="email"
              type="mail"
              placeholderText="Электронная почта"
              name="email"
              value={values.email}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.email}
              classNameWrap="sign-up-group"
              classNameInput="sign-up-field"
            />
            <UIField
              id="mobile"
              type="tel"
              placeholderText="Мобильный номер"
              name="mobile"
              value={values.mobile}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.mobile}
              classNameWrap="sign-up-group"
              classNameInput="sign-up-field"
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
              classNameWrap="sign-up-group"
              classNameInput="sign-up-field"
            />
            <UIField
              id="repeatPassword"
              type="password"
              placeholderText="повторите пароль"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={this.onChange}
              handleBlur={this.handleBlur}
              error={errors.repeatPassword}
              classNameWrap="sign-up-group"
              classNameInput="sign-up-field"
            />

            <button
              type="submit"
              name="Reset"
              className="form-btn"
              onClick={this.onLogin}
            >
              Зарегестрироваться
            </button>
          </form>
        </div>
      );
    }
  }
}
export default SignUpPage;

SignUpPage.propTypes = {
  toggleIsSignUp: PropTypes.func.isRequired,
  isSignUp: PropTypes.bool.isRequired
};
