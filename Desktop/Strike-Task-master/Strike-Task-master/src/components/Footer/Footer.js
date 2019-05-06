import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import Logo from "../Logo";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Logo />
        <SocialMedia />
      </footer>
    );
  }
}
export default Footer;
