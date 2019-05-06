import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import defaultAvatar from "../../images/default-avatar.png";
import PropTypes from "prop-types";

class HeaderWSpase extends Component {
  closeUserMenu = e => {
    let userIcon = document.querySelector(".user-profile_avatar");
    let userDropdownMenu = document.querySelector(
      ".user-profile_dropdown-menu "
    );
    let target = e.target;
    let its_userDropdownMenu =
      target === userDropdownMenu || userDropdownMenu.contains(target);
    let its_userIcon = target === userIcon;
    let userDropdownMenu_is_open = userDropdownMenu.classList.contains("open");

    if (!its_userDropdownMenu && !its_userIcon && userDropdownMenu_is_open) {
      userDropdownMenu.classList.toggle("open");
    }
  };

  toggleUserMenu = e => {
    e.stopPropagation();
    let userDropdownMenu = document.querySelector(
      ".user-profile_dropdown-menu "
    );
    userDropdownMenu.classList.toggle("open");
  };

  componentDidMount() {
    let userIcon = document.querySelector(".user-profile_avatar");
    userIcon.addEventListener("click", this.toggleUserMenu);
    document.addEventListener("click", this.closeUserMenu);
  }

  componentWillUnmount() {
    let userIcon = document.querySelector(".user-profile_avatar");
    userIcon.removeEventListener("click", this.toggleUserMenu);
    document.removeEventListener("click", this.closeUserMenu);
  }

  // Rendering content on the page
  renderUserProfileBlock = () => {
    return (
      <div className="user-profile" onClick={this.toogleDropdownMenu}>
        <div className="user-profile_avatar">
          <img
            src={defaultAvatar}
            alt="avatar"
            className="user-profile_avatar__image"
          />
        </div>
        <div className="user-profile_dropdown-menu">
          <p
            className="user-profile_dropdown-menu__item"
            onClick={this.props.onLogOut}
          >
            Выйти
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="header_wspase">
        <div className="nav">
          <Link to="/dashboard/urgent" className="nav_item">
            Срочные
          </Link>
        </div>
        <Search
          onSearch={this.props.onSearch}
          onChangeSearch={this.props.onChangeSearch}
          search={this.props.search}
        />
        {this.renderUserProfileBlock()}
      </div>
    );
  }
}
export default HeaderWSpase;

HeaderWSpase.propTypes = {
  onLogOut: PropTypes.func.isRequired
};
