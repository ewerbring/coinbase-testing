import React from "react";

// let placeholder = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
import Video from "../assets/placeholder.mp4";
import Heart from "../assets/heart.png";
import Beanie from "../assets/beanie.jpeg";
import Cog from "../assets/cog.png";

export default function Mobile() {
  return (
    <div>
      <div className="videoContainer">
        <video className="video" autoPlay muted loop id="testvideo">
          <source src={Video} />
        </video>
      </div>
      <div className="contentContainer">
        <div className="titleContainer">
          <img alt="alt" src={Cog} className="cog" />
          <span className="textBlock1">textblock1</span>
          <img alt="alt" src={Cog} className="cog" />
        </div>
        <div className="imageContainerMobile">
          <img alt="alt" src={Heart} className="heart1" />
          <img alt="alt" src={Heart} className="heart2" />
          <img alt="alt" src={Heart} className="heart3" />
          <img alt="alt" src={Heart} className="heart4" />
          <img alt="alt" src={Beanie} className="dollImage" />
        </div>
        <div className="textBlock2">
          textblock2
          <br />
          textblock3
        </div>
        <div className="textBlock3">
          Emmet does not expand "Lorem ipsum" anymore · Issue
          ...https://github.com › Microsoft › vscode › issues 21 Aug 2017 —
          VSCode Version: Code 1.15.1 (41abd21, 2017-08-16T17:16:27.618Z) OS
          Version: Linux x64 4.4.0-92-generic Extensions: Extension Author ...
        </div>
        <div></div>
      </div>
    </div>
  );
}
