import star from "../image/star1.png";
import pic from "../image/image12.png";

const Cards = () => {
  return (
    <div className="card">
      <div className="pic">
        <h5>SOLD OUT</h5>
        <img src={pic} alt="logo" className="image" />
      </div>
      <div className="card-text">
        <img src={star} alt="star" className="star-logo" />
        <h6>
          5:0(6).USA <br />
          Life Lesson with katie zafres
          <br />
          <span>FROM $136/Person</span>
        </h6>
      </div>
    </div>
  );
};
export default Cards;
