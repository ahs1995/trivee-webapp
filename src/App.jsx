import { React, useState } from "react";
import "./index.css";
import Quiz from "./Components/Quiz";
import SchoolIcon from "@mui/icons-material/School";
import Blob from "./Components/Blob";

function App() {
  const [gameStart, setGameStart] = useState(false);

  function handleGameStart() {
    setGameStart((prevValue) => !prevValue);
  }

  return (
    <div className="app">
      <Blob gameStart={gameStart} />
      {/* <div className="blob">
        {!gameStart ? (
          <div>
            <svg
              style={{ right: "-120px" }}
              className="blob-top"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#D7E5CA"
                d="M35.1,-68.8C39.7,-58.3,33.4,-36.9,32,-23.7C30.7,-10.4,34.4,-5.2,36.8,1.4C39.3,8,40.5,16.1,40.8,27.5C41.1,39,40.4,53.8,33.4,65.8C26.4,77.8,13.2,87,4.4,79.5C-4.5,72,-9,47.7,-19.4,37.6C-29.8,27.6,-46,31.8,-60.2,27.9C-74.3,24,-86.3,12,-86.6,-0.2C-87,-12.4,-75.7,-24.8,-65,-34.7C-54.4,-44.6,-44.3,-52,-33.6,-58.9C-22.9,-65.8,-11.4,-72.2,1.9,-75.5C15.3,-78.9,30.6,-79.2,35.1,-68.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              style={{ left: "-170px" }}
              className="blob-bottom"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#D7E5CA"
                d="M31.9,-58.7C39.6,-50.9,42.6,-38.7,52.1,-28.1C61.6,-17.6,77.5,-8.8,81.8,2.5C86.1,13.8,78.8,27.5,69,37.5C59.2,47.5,46.9,53.8,35,60.1C23.1,66.5,11.5,73,2.4,68.8C-6.7,64.6,-13.3,49.6,-22.9,41.8C-32.5,34.1,-44.9,33.6,-56.7,27.9C-68.4,22.1,-79.4,11,-79.3,0C-79.3,-11,-68.1,-21.9,-56.3,-27.6C-44.5,-33.3,-32.1,-33.7,-22.6,-40.4C-13.1,-47,-6.6,-59.9,2.8,-64.8C12.2,-69.6,24.3,-66.4,31.9,-58.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              style={{ left: "-140px", transform: "Rotate(-70deg)" }}
              className="blob-top"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#D7E5CA"
                d="M35.1,-68.8C39.7,-58.3,33.4,-36.9,32,-23.7C30.7,-10.4,34.4,-5.2,36.8,1.4C39.3,8,40.5,16.1,40.8,27.5C41.1,39,40.4,53.8,33.4,65.8C26.4,77.8,13.2,87,4.4,79.5C-4.5,72,-9,47.7,-19.4,37.6C-29.8,27.6,-46,31.8,-60.2,27.9C-74.3,24,-86.3,12,-86.6,-0.2C-87,-12.4,-75.7,-24.8,-65,-34.7C-54.4,-44.6,-44.3,-52,-33.6,-58.9C-22.9,-65.8,-11.4,-72.2,1.9,-75.5C15.3,-78.9,30.6,-79.2,35.1,-68.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              style={{ right: "-140px", transform: "Rotate(-20deg)" }}
              className="blob-bottom"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#D7E5CA"
                d="M31.9,-58.7C39.6,-50.9,42.6,-38.7,52.1,-28.1C61.6,-17.6,77.5,-8.8,81.8,2.5C86.1,13.8,78.8,27.5,69,37.5C59.2,47.5,46.9,53.8,35,60.1C23.1,66.5,11.5,73,2.4,68.8C-6.7,64.6,-13.3,49.6,-22.9,41.8C-32.5,34.1,-44.9,33.6,-56.7,27.9C-68.4,22.1,-79.4,11,-79.3,0C-79.3,-11,-68.1,-21.9,-56.3,-27.6C-44.5,-33.3,-32.1,-33.7,-22.6,-40.4C-13.1,-47,-6.6,-59.9,2.8,-64.8C12.2,-69.6,24.3,-66.4,31.9,-58.7Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        )}
      </div> */}

      {!gameStart && (
        <div className="welcome-section">
          <main className="welcome-page">
            <div className="logo">
              <h1 className="heading">Trivee</h1>
              <div className="logo-icon">
                <img src="./src/images/lightbulb.png" alt="bulb icon" />
              </div>
            </div>

            <h4 className="sub-heading">A trivia game app</h4>
            <div className="btn-container">
              <button className="start-button btn" onClick={handleGameStart}>
                Start
              </button>
            </div>
          </main>
        </div>
      )}
      {gameStart && <Quiz onGameStart={handleGameStart} />}
    </div>
  );
}

export default App;
