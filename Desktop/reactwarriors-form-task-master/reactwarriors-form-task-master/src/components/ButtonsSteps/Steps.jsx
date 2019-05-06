import React from "react";
import Step from "./Step";
class Steps extends React.Component {
  render() {
    const { activeStep } = this.props;
    return (
      <div className="steps mb-4 d-flex justify-content-around">
        <Step id={1} nameStep="Basic" activeStep={activeStep} />
        <Step id={2} nameStep="Contacts" activeStep={activeStep} />
        <Step id={3} nameStep="Avatar" activeStep={activeStep} />
        <Step id={4} nameStep="Finish" activeStep={activeStep} />
      </div>
    );
  }
}
export default Steps;
