import star from "../image/star1.png";
//import pic from "../image/katie-zaferes.png";

const Cards = (props) => {
  console.log(props.openSpot);

  let bageText;
  if (props.openSpot === 0) {
    bageText = "SOLD OUT";
  } else if (props.location === "online") {
    bageText = "ONLINE";
  }

  return (
    <div className="card">
      <div className="pic">
        {/* {props.openSpot === 0 && <h5>SOLD OUT</h5>}  conditional statement*/}
        {bageText && <h5>{bageText}</h5>}
        <img src={props.imgs} alt="logo" className="image" />
      </div>
      <div className="card-text">
        <img src={star} alt="star" className="star-logo" />
        <h6>
          {`${props.rating}(${props.reviewCount}).${props.location}`} <br />
          {`${props.title}`}
          <br />
          <span>FROM ${`${props.price}`}/Person</span>
        </h6>
      </div>
    </div>
  );
};
export default Cards;
