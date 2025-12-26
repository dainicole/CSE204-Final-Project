import { useEffect } from "react";
import './styles/FacebookFeed.css';

function FacebookFeed() {
  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: 'v18.0',
        });
      };

      (function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="facebook-feed-wrapper">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/STLCRET/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/STLCRET/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/STLCRET/">STLCRET</a>
        </blockquote>
      </div>
    </div>
  );
}

export default FacebookFeed;
