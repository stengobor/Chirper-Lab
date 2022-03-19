import React, { useState } from "react";
import Username from "./components/Username";
import Text from "./components/Text";
import Entries from "./components/Entries";

const App = () => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  //   const [time, setTime] = useState("");
  const [typed, setTyped] = useState(false);
  const [entry, setEntries] = useState([
    {
      id: 1,
      username: ("Sofi"),
      message: "Hello",
    },
    {
      id: 2,
      username: ("Rich"),
      message: "Hello There",
    },
    {
      id: 3,
      username: ("MoMo"),
      message: "Hi",
    },
  ]);

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
    setEntries();
  };

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
          {entry.map((entry) => (
          <Entries
            key={entry.id}
            username={entry.username}
            message={entry.message}
          ></Entries>
        ))}
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
                id="textbox"
                placeholder="Your Thoughts..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleClick}
                class="btn btn-danger"
              >
                Chirp It!
              </button>
            </div>
          </div>

          {entry.map((entry) => (
          <Entries
            key={entry.id}
            username={entry.username}
            message={entry.message}
          ></Entries>
        ))}
        </div>
      </>
    );
  }
};

export default App;
