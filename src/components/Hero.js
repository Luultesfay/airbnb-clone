import AirbnbGrid from "../image/GridPic.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={AirbnbGrid} className="grid--pic" alt="gridpic" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};
export default Hero;
