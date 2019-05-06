import React from "react";
import "../../../styles/startPage.css";
import "../../../styles/startPage@media.css";
import Team from "../Team";
import Сontacts from "../Contacts";

class StartPage extends React.Component {
  render() {
    return (
      <div className="startPage">
        <div id="about-us">
          <h2 className="startPage_title">О нас</h2>
          <div className="about-us_content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div id="team">
          <h2 className="startPage_title">Команда</h2>
          <Team />
        </div>
        <div id="contacts">
          <h2 className="startPage_title">Контакты</h2>
          <Сontacts isSignIn={this.props.isSignIn} />
        </div>
      </div>
    );
  }
}
export default StartPage;
