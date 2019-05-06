import React from "react";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import img from "../../images/slider1.jpg";
const pagePath = window.location.href;

class SocialMedia extends React.Component {
  componentDidMount() {
    //for twitter
    this.addMetategToHead(
      this.createMetateg("twitter:card", "summary_large_image")
    );
    this.addMetategToHead(
      this.createMetateg("twitter:title", "Заголовок для репоста в twitter")
    );
    this.addMetategToHead(
      this.createMetateg("twitter:description", "Подпись для репоста в twitter")
    );
    this.addMetategToHead(
      this.createMetateg(
        "twitter:image:src",
        "https://vk-book.ru/folder-test/share/share_img.jpg"
      )
    );
    this.addMetategToHead(
      this.createMetateg("twitter:url", "https://vk-book.ru/folder-test/share/")
    );
    this.addMetategToHead(this.createMetateg("twitter:domain", "vk-book.ru"));
    //for others
    this.addMetategToHead(this.createMetateg("og:url", `${pagePath}`));
    this.addMetategToHead(this.createMetateg("og:type", "website"));
    this.addMetategToHead(this.createMetateg("og:title", "Strike Task"));
    this.addMetategToHead(
      this.createMetateg("og:description", "application for daily task")
    );
    this.addMetategToHead(this.createMetateg("og:image", img));
    this.addMetategToHead(
      this.createMetateg("og:description", "Подпись для репоста")
    );
    this.addMetategToHead(this.createMetateg("og:image:type", "image/jpg"));
    this.addMetategToHead(this.createMetateg("og:image:width", "1200"));
    this.addMetategToHead(this.createMetateg("og:image:height", "628"));
  }
  createMetateg = (propValue, contentValue) => {
    let metateg = document.createElement("meta");
    metateg.setAttribute("property", propValue);
    metateg.content = contentValue;
    return metateg;
  };
  addMetategToHead = link => {
    document.getElementsByTagName("head")[0].appendChild(link);
  };
  render() {
    return (
      <div className="socialmedia">
        <Facebook />
        <Twitter />
      </div>
    );
  }
}
export default SocialMedia;
