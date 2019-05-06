import React, { Component } from "react";
import PropTypes from "prop-types";

class HeaderStartPage extends Component {
  render() {
    return (
      <div className="header_wspase">
        <div className="nav">
          <a href="#about-us" className="nav_item">
            О нас
          </a>
          <a href="#team" className="nav_item">
            Команда
          </a>
          <a href="#contacts" className="nav_item">
            Контакты
          </a>

          <div className="wrap-btns">
            <button
              className="sidn-in--btn"
              onClick={() => this.props.toogleModulWindowForSignIn(true)}
            >
              Войти
            </button>
            <button
              className="sidn-up--btn"
              onClick={() => this.props.toogleModulWindowForSignUp(true)}
            >
              Зарегестрироваться
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderStartPage;

HeaderStartPage.propTypes = {
  toogleModulWindowForSignUp: PropTypes.func.isRequired,
  toogleModulWindowForSignIn: PropTypes.func.isRequired
};
