import React from "react";


const Entries = ({username, message}) => {

  return (
    <div class="card text-light bg-warning col-4 m-5">
      <div class="card-header">
        <header> @{username} </header>
      </div>
      <div class="card-body">
        <header> {message} </header>
      </div>
    </div>
  );
};

export default Entries
