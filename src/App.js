import React from "react";
import "./App.css";
import { Iframe } from "./Iframe";
import { database } from "./database";

const Line = ({ from, trackId }) => (
  <connection
    from={`#track-${from}`}
    to={`#track-${trackId}`}
    tail="true"
    color="#fff"
  ></connection>
);

const Track = ({ trackId, from }) => {
  return (
    <div
      key={trackId}
      id={`track-${trackId}`}
      style={{ margin: 60, zIndex: 1000 }}
    >
      <Iframe trackId={trackId} from={from} />
    </div>
  );
};

const Node = ({ trackId }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Track trackId={trackId} />
      <div style={{}}>
        {Object.entries(database).map(([leafTrackId, info]) => {
          const isLeaf = info.from === Number(trackId);

          return isLeaf ? (
            <Node key={leafTrackId} trackId={leafTrackId} />
          ) : null;
        })}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>SoundGraph</h1>
      <header className="App-content">
        {/* {Object.entries(database).map(([trackId, info]) => (
          <Track trackId={trackId} />
        ))} */}
        {Object.entries(database).map(([trackId, info]) =>
          info.from ? (
            <Line key={trackId} trackId={trackId} from={info.from} />
          ) : (
            <Node key={trackId} trackId={trackId} />
          )
        )}
      </header>
    </div>
  );
}

export default App;
