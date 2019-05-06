import React from "react";

export default class UIField extends React.PureComponent {
  render() {
    const {
      id,
      name,
      placeholderText,
      type,
      onChange,
      handleBlur,
      value,
      error,
      classNameWrap,
      classNameInput
    } = this.props;

    return (
      <div className={classNameWrap}>
        <input
          type={type}
          className={classNameInput}
          id={id}
          placeholder={placeholderText}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}
