import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Data from "./Data";

console.log(Data);

const displayData = Data.map((data) => (
  <Cards
    key={data.id}
    price={data.price}
    //images/katie-zaferes.png
    imgs={`images/${data.imgs}`}
    reviewCount={data.reivewCount}
    location={data.location}
    title={data.Title}
    rating={data.rating}
    openSpot={data.openSpot}
  />
));
console.log(displayData);

function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <section className="card--list">{displayData}</section>

      {/* <Cards
        imgs={require("./image/katie-zaferes.png")}
        rating={"5.0"}
        reviewCount={6}
        country="Eritrea"
        Title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}
    </div>
  );
}

export default App;
