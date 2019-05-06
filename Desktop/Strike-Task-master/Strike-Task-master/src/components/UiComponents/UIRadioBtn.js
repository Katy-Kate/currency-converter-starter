import React from "react";

export default class UIRadioBtn extends React.PureComponent {
  render() {
    const { id, name, type, onChange, value, error, checked } = this.props;

    return (
      <div className="form-check">
        <input
          type={type}
          className="form-check-input"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={id} className="form-check-label">
          {value}
        </label>
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    );
  }
}
