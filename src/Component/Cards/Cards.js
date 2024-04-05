import "./Cards.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";

const Cards = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <h1>Some common mental illness</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <div
            className="card1_img featurette-image img-fluid mx-auto"
            style={{ width: "500px", height: "400px" }}
          ></div>
          <h2>Depression</h2>

          <Button
            variant="dark"
            className="btn"
            href="https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007"
            target=" "
          >
            <h5>Learn More</h5>
          </Button>
        </div>

        <div className="card">
          <div
            className="card2_img featurette-image img-fluid mx-auto"
            style={{ width: "500px", height: "400px" }}
          ></div>
          <h2>Anxiety</h2>

          <Button
            variant="dark"
            className="btn "
            href="https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders#:~:text=Anxiety%20is%20a%20normal%20reaction,involve%20excessive%20fear%20or%20anxiety."
            target=" "
          >
            <h5>Learn More</h5>
          </Button>
        </div>

        <div className="card">
          <div
            className="card3_img featurette-image img-fluid mx-auto"
            style={{ width: "500px", height: "400px" }}
          ></div>
          <h2>Bipolar Disorder</h2>

          <Button
            variant="dark"
            className="btn "
            href="https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955"
            target=" "
          >
            <h5>Learn More</h5>
          </Button>
        </div>

        <div className="card">
          <div
            className="card4_img featurette-image img-fluid mx-auto"
            style={{ width: "500px", height: "400px" }}
          ></div>
          <h2>Dementia</h2>

          <Button variant="dark" className=" btn ">
            <h5>Learn More</h5>
          </Button>
        </div>

        <div className="card">
          <div
            className="card5_img featurette-image img-fluid mx-auto"
            style={{ width: "500px", height: "400px" }}
          ></div>
          <h2>Schizophrenia </h2>

          <Button variant="dark" className=" btn ">
            <h5>Learn More </h5>
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Cards;
