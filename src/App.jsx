import React, { useState, useEffect } from "react";
import Username from "./components/Username";
import Text from "./components/Text";

const App = () => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  //   const [time, setTime] = useState("");
  const [typed, setTyped] = useState(false);
const [entry, setEntries] = useState("");
  //   timeStamp(() => {
  //     time = Date.now();
  //     setTime (new Intl.DateTimeFormat("en-US", {
  //       year: "numeric",
  //       month: "2-digit",
  //       day: "2-digit",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }).format(time));
  //   });

  const handleClick = (e) => {
    e.preventDefault();
    setTyped(true);
  };
  const handleEntries = (e) => {
      e.preventDefault();
      setEntries(entry + 1);
  }

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setTyped(true);
  //     }, 2000);
  //   });

  if (typed) {

    return (
      <>
        <h1
          style={{
            letterSpacing: "70px",
            color: "orange",
            textAlign: "center",
            fontSize: "120px",
            fontfamily: "Blippo, fantasy",
          }}
        >
          CHIRPER...
        </h1>

        <div class="row">
          <div class="card text-light text-center bg-warning col-4 m-5">
            <div class="card-header">
              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div class="card-body">
              <h5 class="card-title">TYPE SOMETHING...</h5>
              <input
                id="textbox"
                placeholder="Your Thoughts..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </div>
            <div>
              <button onClick={handleEntries} class="btn btn-danger">
                Chirp It!
              </button>
            </div>
          </div>

          <div class="card text-light bg-warning col-4 m-5">
            <div class="card-header">
              <Username currentUsername={username}></Username>
            </div>
            <div class="card-body">
              <Text currentText={text}></Text>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1
          style={{
            letterSpacing: "70px",
            color: "orange",
            textAlign: "center",
            fontSize: "120px",
            fontfamily: "Blippo, fantasy",
          }}
        >
          CHIRPER...
        </h1>
        <div class="row">
          <div class="card text-light text-center bg-warning col-4 m-5">
            <div class="card-header">
              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div class="card-body">
              <h5 class="card-title">TYPE SOMETHING...</h5>
              <input
                id='textbox'
                placeholder="Your Thoughts..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </div>
            <div>
              <button onClick={handleClick} class="btn btn-danger">
                Chirp It!
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default App;
