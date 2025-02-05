import React, { useState, useRef } from "react";
import "./App.css";
import Webcam from "react-webcam";
import beepSound from "./assets/video_call.mp3";
import callImage from "./assets/call.png";

const App = () => {
  const [isModalCallOpen, setIsModalCallOpen] = useState(false);
  const [isModalVideoCallOpen, setIsModalVideoCallOpen] = useState(false);
  const audioRef = useRef(null);

  const handleVideoCallClick = () => {
    setIsModalVideoCallOpen(true);
  };

  const handleCallClick = () => {
    setIsModalCallOpen(true);
  };

  const handleCallMe = () => {
    window.open(
      "https://www.profitablecpmrate.com/gffmyxh4n1?key=a64e84b57dcab2094bfb3d155fffe866",
      "_blank"
    );

    if (audioRef.current) {
      audioRef.current.play(); // Play sound when ending the call
    }

    setTimeout(() => {
      setIsModalVideoCallOpen(false);
      setIsModalCallOpen(false);
    }, 10000);
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3GTlM3LnJ7frEq8Rm5lqtJkyaP5K0j9PYhGeyQK4PrVvn69wJzbqltnOunAT_pcvs8A&usqp=CAU"
          alt="Profile"
          className="profile-img"
        />
        <h2 className="name">ඔයා මට කැමති ද?</h2>
        <p className="description">
          ඔයා අවංක කෙනෙක් නම් විතරක් Call කරන්න. Massege කරන්න. වයස ප්‍රශ්නයක් නෑ❤️😊
        </p>

        <div className="button-container">
          <a
            href="https://www.profitablecpmrate.com/xcnckz1e?key=f4f5d9f2736a08cd0c28b3bf8762aed0"
            className="button"
          >
            Whatsapp Massege එකක් දාන්න
          </a>
          <button className="button" onClick={handleCallClick}>
            Call එකක් ගන්න
          </button>
          <button className="button" onClick={handleVideoCallClick}>
            Video Call එකක් ගන්න
          </button>
          <a
            href="https://www.profitablecpmrate.com/gu4kiyh86?key=012479d31b726678db91f9239b011233"
            className="button"
          >
            මගෙ Number එක මෙතනින් ගන්න
          </a>
        </div>

        <div className="social-icons">
          <a href="https://www.profitablecpmrate.com/w64ec6k5ta?key=607a2d9069920f4c7e8935e2e50ac669" className="icon">
            <img
              src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Facebook.png"
              alt="Profile"
            />
          </a>
          <a href="https://www.profitablecpmrate.com/r0hhihvef9?key=21e49866001f69d1495a24e4330048ad" className="icon">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-64.png"
              alt="Profile"
            />
          </a>
          <a href="https://www.profitablecpmrate.com/bii4giuq?key=fca7c38d3001c0d76bb822ef91f4a8e4" className="icon">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2421/512/TikTok-512.png"
              alt="Profile"
            />
          </a>
        </div>
      </div>

      {/* Video Call Modal */}
      {isModalVideoCallOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Live Video Call</h2>
            <Webcam
              audio={false}
              videoConstraints={{ facingMode: "user" }}
              width="100%"
              height="auto"
            />
            <button onClick={handleCallMe}>Call Me</button>
            {/* Audio Element inside Modal */}
            <audio ref={audioRef} src={beepSound} preload="auto"></audio>
          </div>
        </div>
      )}

      {/* Call Modal */}
      {isModalCallOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Call Screen</h2>
            <img src={callImage} alt="Call" />
            <button onClick={handleCallMe}>Call Me</button>
            {/* Audio Element inside Modal */}
            <audio ref={audioRef} src={beepSound} preload="auto"></audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
