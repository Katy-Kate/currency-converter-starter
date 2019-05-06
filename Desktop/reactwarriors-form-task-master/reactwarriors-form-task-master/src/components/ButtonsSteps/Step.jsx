import React from "react";

export default class Step extends React.Component {
  getClassName = () => {
    const { id, activeStep } = this.props;
    if (activeStep === id) {
      return "step is-active";
    } else if (activeStep - id >= 1) {
      return "step is-completed";
    } else {
      return "step";
    }
  };
  render() {
    const { nameStep, id, activeStep } = this.props;
    return (
      <div className={this.getClassName()}>
        <div className="step__marker">{id}</div>
        <div className="step__title mt-1">{nameStep}</div>
      </div>
    );
  }
}
