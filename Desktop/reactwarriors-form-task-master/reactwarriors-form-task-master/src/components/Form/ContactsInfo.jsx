import React from "react";
import Field from "./Field";
import SelectedField from "./SelectedField";
import countries from "../../data/countries";
import ActiveCities from "./ActiveCities";
import cities from "../../data/cities";

export default class ContactsInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      renderСities: []
    };
  }
  getCities = arr => {
    const countryNumber = Number(arr);
    const aciveCities = [];
    for (let city in cities) {
      const index = cities[city];
      if (countryNumber === index.country) {
        aciveCities.push(index.name);
      }
    }

    this.setState({
      renderСities: aciveCities
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.values.country !== prevProps.values.country) {
      this.getCities(this.props.values.country);
    }
  };
  componentDidMount() {
    this.getCities(this.props.values.country);
  }
  render() {
    const { values, onChange, errors } = this.props;
    return (
      <div>
        <Field
          id="email"
          labelText="email"
          type="text"
          placeholderText="Enter email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />
        <Field
          id="mobile"
          labelText="mobile"
          type="tel"
          placeholderText="Enter mobile"
          name="mobile"
          value={values.mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <SelectedField array={countries} onChange={onChange} />
        <ActiveCities
          array={this.state.renderСities}
          onChange={onChange}
          values={values}
          error={errors.city}
        />
      </div>
    );
  }
}
