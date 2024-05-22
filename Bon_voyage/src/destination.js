import React from "react";
import Destinationdata from "./destinationdata";
import "./destinationstyless.css";
import Mountain from "./1.jpg";
import Mountain1 from "./2.jpg";
import Mountain3 from "./5.jpg";
import Mountain4 from "./8.jpg";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>To Travel is to Live!</p>
      <Destinationdata
        classname="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is famous for being one of the World’s smallest active volcanoes and is part of the Pacific Ring of Fire.The view of Taal lake with Taal volcano within.It’s a dreamy land that creates a romantic atmosphere especially for lovers.It is known for its natural beauty.When the sun is up, the blue sky creates a stunning scenery especially with the presence of electric blue clouds and flocks of birds gliding above.It is a perfect place for bird sanctuary too.The greenery side,it is surrounded by mountains,vast vegetation of pineapples and sunflowers, not to mention the clear and clean water of the lake."
        img1={Mountain}
        img2={Mountain1}
      />
      <Destinationdata
        classname="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="Mount Daguldol is a stunning mountain with a lot to offer.It is named as 'Daguldul' because of the sudden rolling of its hills. It offers a beautiful mountain range having amazing views and relaxing feel because its trail is closer to the sea.If you are looking for a hike that's a little more challenging but still good for a begineer mountaineer,check out Mt.Daguldul in San Juan,Batangas. This mountain although not as popular as its counterparts (Batulao, etc) is a one of a kind mountain where you will be able to experience a variety of terrains.Daguldol provides great views overlooking the nearby beach, lush woodlands, rolling slopes, and nearby mountains. The view at the summit is the best as you can experience both the sea and the mountains."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}
export default Destination;
