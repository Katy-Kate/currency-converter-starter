import React from "react";
import PropTypes from "prop-types";

export default class UISelect extends React.PureComponent {
  render() {
    const {
      wraper,
      id,
      labelText,
      onChange,
      options,
      value,
      defaultValue
    } = this.props;

    return (
      <div className={wraper}>
        <label htmlFor={id} className={`${wraper}_label`}>
          {labelText}
        </label>
        <select
          className={`${wraper}_options`}
          id={id}
          name={id}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
        >
          {options.map(item => {
            return (
              <option
                //selected={item.id === Number(defaultStatus)}
                value={item.id}
                key={item.id}
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

UISelect.propTypes = {
  wraper: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
