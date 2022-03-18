import React, { useEffect } from "react";

const Entries = (props) => {
  useEffect(() => {
    window.addEventListener("click", (event) => {});
  }, []);

  return (
    <div class="card text-light bg-warning col-4 m-5">
      <div class="card-header">
        <header> @{props.newUser}</header>
      </div>
      <div class="card-body">
        <header> {props.newText} </header>
      </div>
    </div>
  );
};

export default Entries
