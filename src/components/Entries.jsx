import React from "react";


const Entries = (props) => {

  return (
    <div class="card text-light bg-warning col-4 m-5">
      <div class="card-header">
        <header> @Sofi </header>
      </div>
      <div class="card-body">
        <header> {props.message} </header>
      </div>
    </div>
  );
};

export default Entries
