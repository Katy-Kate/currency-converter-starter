import React from "react";

export default class ActiveCities extends React.Component {
  render() {
    const { array, onChange, values, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="country">City</label>
        <select
          className="form-control"
          id="city"
          name="city"
          onChange={onChange}
          value={values.city}
        >
          <option value="">Select city</option>
          {array
            ? array.map(item => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })
            : null}
        </select>
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    );
  }
}
