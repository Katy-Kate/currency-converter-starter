import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { API_KEY_GOOGLE_MAP, map_options } from "../../data/app_data";
let map;

class Contacts extends React.PureComponent {
  initMap = () => {
    if (!this.props.isSignIn) {
      let el = document.getElementById("map");
      if (el) {
        map = new window.google.maps.Map(el, map_options);
        let marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(7.7186518, 81.7189023),
          map: map
        });
      }
    }
  };

  addMap = () => {
    if (typeof window.google !== "undefined") {
      this.initMap();
      return;
    }
    let el = document.getElementById("map");
    if (el && el.children.length === 0) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY_GOOGLE_MAP}`;
      script.async = true;
      script.defer = true;
      script.setAttribute = ("name", "map");
      script.addEventListener("load", () => {
        this.initMap();
      });
      document.body.appendChild(script);
    }
  };
  componentDidMount = () => {
    this.addMap();
  };

  render() {
    return (
      <div className="contacts-wrap">
        <div className="contacts">
          <div className="contacts_item">
            <FontAwesomeIcon icon={faGlobe} />
            com-srilanka.com
          </div>
          <div className="contacts_item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:srilanka.gmail.com"> srilanka.gmail.com</a>
          </div>
          <div className="contacts_item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+94772944306">+94 77 294 4306</a>
          </div>
          <div className="contacts_item">
            <FontAwesomeIcon icon={faMapMarker} />
            Navalady Rd, 30000, Шри-Ланка
          </div>
        </div>
        <div id="map" />
      </div>
    );
  }
}
export default Contacts;
