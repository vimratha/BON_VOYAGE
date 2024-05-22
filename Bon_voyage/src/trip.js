import React from "react";
import "./tripstyles.css";
import Tripdata from "./tripdata";
import trip1 from "./5.jpg";
import trip2 from "./8.jpg";
import trip3 from "./3.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={trip1}
          heading="Trip in Indonesia"
          text="A land gifted with pristine beaches, exotic water villas on serene islands, vibrant tribes and their cultural ethos.There are many surreal places in Indonesia, and together they offer a mix of outlandish island wonders and spine-chilling adventures."
        />

        <Tripdata
          image={trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay peninsula and the island of Borneo.It's known for its beaches,rainforests and mix of Malay,Chinese,Indian and European cultural influences."
        />
        <Tripdata
          image={trip3}
          heading="Trip in France"
          text="France,in Western Europe,encompasses medieval cities,alpine villages and Mediterranean beaches.Paris,its capital,is famed for its fashion houses,classical art museums including the monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}
export default Trip;
