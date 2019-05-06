import React from "react";

(function() {
  let script = document.createElement("script");
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  script.defer = true;
  script.crossorigin = "anonymous";
  document.body.appendChild(script);
})();

window.twttr = (function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
})(document, "script", "twitter-wjs");

class Twitter extends React.Component {
  render() {
    return (
      <div className="socialmedia_twitter">
        <div id="twitter-wjs" />
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-show-count="false"
        >
          Tweet
        </a>
      </div>
    );
  }
}

export default Twitter;
