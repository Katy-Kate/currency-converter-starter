import React, { Component } from "react";
import Gallery from "../Gallery";

let teamGallery = [
  {
    name: "Steve Jobs",
    src:
      "https://naqyr37xcg93tizq734pqsx1-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
    email: "steveJobs@gmail.com"
  },
  {
    name: "Mark Elliot Zuckerberg",
    src:
      "https://img2.freepng.ru/20180324/lte/kisspng-mark-zuckerberg-facebook-founder-harvard-universit-mark-zuckerberg-5ab685dac193b0.9104902415219112587929.jpg",
    email: "zuckerberg@gmail.com"
  },
  {
    name: "Steve Jobs",
    src:
      "https://naqyr37xcg93tizq734pqsx1-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
    email: "steveJobs@gmail.com"
  },
  {
    name: "Brendan Eich",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/600px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
    email: "Brend-eich@gmail.com"
  }
];

class Team extends Component {
  render() {
    return (
      <div className="team">
        <Gallery dataGalery={teamGallery} />
      </div>
    );
  }
}
export default Team;
