import React, { Component } from "react";
import { leftUserMenu } from "../../data/app_data";
import MenuItem from "./MenuItem";

class LeftPanel extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="left-nav">
          {leftUserMenu.map((item, i) => {
            return <MenuItem item={item} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
export default LeftPanel;
