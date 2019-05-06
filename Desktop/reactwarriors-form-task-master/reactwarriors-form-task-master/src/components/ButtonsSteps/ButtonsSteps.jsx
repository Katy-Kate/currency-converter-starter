import React from "react";

export default class ButtonsSteps extends React.Component {
  render() {
    const { name } = this.props;
    return <span onClick={this.props.onChangeStep(name)}>{name}</span>;
  }
}
