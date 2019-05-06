import React from "react";
import Field from "./Field";
import Gender from "./Gender";

export default class BasicInfo extends React.Component {
  render() {
    const { values, onChange, errors } = this.props;
    return (
      <div className="form-group">
        <Field
          id="firstname"
          labelText="firstname"
          type="text"
          placeholderText="Enter firstname"
          name="firstname"
          value={values.firstname}
          onChange={onChange}
          error={errors.firstname}
        />
        <Field
          id="lastname"
          labelText="lastname"
          type="text"
          placeholderText="Enter lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
          error={errors.lastname}
        />
        <Field
          id="password"
          labelText="Password"
          type="password"
          placeholderText="Enter password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={errors.password}
        />
        <Field
          id="repeatPassword"
          labelText="Repeat password"
          type="password"
          placeholderText="Enter repeatPassword"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onChange}
          error={errors.repeatPassword}
        />
        <Gender gender={values.gender} onChange={onChange} />
      </div>
    );
  }
}
