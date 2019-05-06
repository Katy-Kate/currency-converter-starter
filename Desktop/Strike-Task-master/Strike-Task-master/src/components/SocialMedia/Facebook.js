import React from "react";

const pagePath = window.location.href;
(function() {
  let script = document.createElement("script");
  script.src = "https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.3";
  script.async = true;
  script.defer = true;
  script.crossorigin = "anonymous";
  document.body.appendChild(script);
})();
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

class Facebook extends React.Component {
  render() {
    return (
      <div className="socialmedia_facebook">
        <div id="fb-root" />
        <div
          className="fb-share-button"
          data-href={pagePath}
          data-layout="button"
          data-size="small"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F${encodeURI(
              pagePath
            )}%2F&amp;src=sdkpreparse`}
            className="fb-xfbml-parse-ignore"
          >
            Поделиться
          </a>
        </div>
      </div>
    );
  }
}

export default Facebook;
