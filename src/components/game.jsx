import React from "react";

const Game = (props) => {
  return (
    <div className="Card">
      <div className="Card__Top">
        <div className="Team">
          <img
            className="Team_Logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/800px-New_York_Mets.svg.png"
            alt="Mets Logo"
          />
          New York Mets
        </div>

        <h2 className="Versus">V.S</h2>
        <div className="Team">
          <img
            className="Team_Logo"
            src={props.Opponent_Logo + ""}
            alt="MLB Logo"
          />
          {props.Opponent}
        </div>
      </div>
      <div className="Card__Bottom">
        <div className="Date">Date: {props.Date}</div>
        <a href={props.Tickets_Url} target="_blank" rel="noreferrer">
          <button className="Button">Buy Tickets</button>
        </a>
      </div>
    </div>
  );
};

export default Game;
