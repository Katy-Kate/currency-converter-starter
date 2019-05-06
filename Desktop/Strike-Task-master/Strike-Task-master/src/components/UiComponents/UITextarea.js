import React from "react";

export default class UITextarea extends React.PureComponent {
  render() {
    const {
      id,
      name,
      placeholderText,
      type,
      onChange,
      handleBlur,
      value,

      classNameWrap,
      classNameInput
    } = this.props;

    return (
      <div className={classNameWrap}>
        <textarea
          type={type}
          className={classNameInput}
          id={id}
          placeholder={placeholderText}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
      </div>
    );
  }
}
