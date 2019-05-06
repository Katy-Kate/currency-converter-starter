import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpenMenu: false
    };
  }
  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ isOpenMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ isOpenMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };
  componentWillUnmount = () => {
    this.state.isOpenMenu &&
      document.removeEventListener("click", this.hideDropdownMenu);
  };
  renderDropdawnMwnu = () => {
    return (
      <div className="dropdown-menu left-nav-2 ">
        {this.props.item.dropdown.map((item, i) => {
          return (
            <Link
              key={i}
              to={`${this.props.item.path}${item.path}`}
              className="left-nav-2_item"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    );
  };

  render() {
    const { name, path, dropdown } = this.props.item;
    return (
      <div className="left-nav_item">
        <Link to={path}>{name}</Link>
        {dropdown && (
          <React.Fragment>
            <div className="left-nav_item__btn" onClick={this.showDropdownMenu}>
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
            {this.state.isOpenMenu && this.renderDropdawnMwnu()}
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default MenuItem;
