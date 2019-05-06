import React from "react";
import AvatarInfo from "./Form/AvatarInfo";
import ContactsInfo from "./Form/ContactsInfo";
import BasicInfo from "./Form/BasicInfo";
import ButtonsSteps from "./ButtonsSteps/ButtonsSteps";
import FinishInfo from "./Form/FinishInfo";
import Steps from "./ButtonsSteps/Steps";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        email: "",
        mobile: "",
        country: 1,
        city: "",
        avatar: ""
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        gender: "male",
        email: false,
        mobile: false,
        city: false
      },
      activeStep: 2,
      isDisablePrevBtn: true,
      isDisableNextBtn: true
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value }
    }));
  };
  validateFields = () => {
    const errors = {};
    if (this.state.activeStep === 1) {
      if (this.state.values.firstname.length < 5) {
        errors.firstname = "Must be more then 4 charecters";
      }
      if (this.state.values.lastname.length < 5) {
        errors.lastname = "Must be more then 4 charecters";
      }
      if (this.state.values.password.length < 6) {
        errors.password = "Must be more then 5 charecters";
      }
      if (
        this.state.values.repeatPassword !== this.state.values.password ||
        this.state.values.password.length === 0
      ) {
        errors.repeatPassword = "Password must be the same";
      }
    } else if (this.state.activeStep === 2) {
      const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
      const regExpMobile = new RegExp(
        "^((8|+7)[- ]?)?((?d{3})?[- ]?)?[d- ]{7,10}$"
      );
      if (!regExpMail.test(this.state.values.email)) {
        errors.email = "Invalid email address";
      }
      if (!this.state.values.mobile.match(regExpMobile)) {
        console.log("Daaa");
        errors.email = "Invalid mobile number";
      }
      if (!this.state.values.city) {
        errors.city = "Required";
      }
    }
    return errors;
  };
  onChangeStep = event => () => {
    const { activeStep } = this.state;
    const errors = this.validateFields();

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({
        errors: {}
      });
      if (event === "Previous" && activeStep > 1) {
        this.setState({ activeStep: activeStep - 1 });
      } else if (event === "Next" && activeStep < 4) {
        this.setState({ activeStep: activeStep + 1 });
      }
    }
  };

  render() {
    const { activeStep, values, errors } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps activeStep={activeStep} />
          {activeStep === 1 ? (
            <BasicInfo
              errors={errors}
              onChange={this.onChange}
              values={values}
            />
          ) : null}
          {activeStep === 2 ? (
            <ContactsInfo
              errors={errors}
              onChange={this.onChange}
              values={values}
            />
          ) : null}
          {activeStep === 3 ? (
            <AvatarInfo
              errors={errors}
              onChange={this.onChange}
              values={values}
            />
          ) : null}
          {activeStep === 4 ? (
            <FinishInfo
              errors={errors}
              onChange={this.onChange}
              values={values}
            />
          ) : null}

          <div className="d-flex justify-content-center">
            <ButtonsSteps name="Previous" onChangeStep={this.onChangeStep} />
            <ButtonsSteps name="Next" onChangeStep={this.onChangeStep} />
          </div>
        </form>
      </div>
    );
  }
}
