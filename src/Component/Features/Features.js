import "./Features.css";

const Features = () => {
  return (
    <>
      <div className="container my-5">
        <h1>How to Fight</h1>
        {/* 1st card  */}
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">Get Closer to Nature</h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <div
              className="feature1_img featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            ></div>
          </div>
        </div>

        {/* 2nd Card  */}
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Keep moving</h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <div
              className="feature2_img featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            ></div>
          </div>
        </div>
        {/* 3rd Card */}
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">Eat healthy food </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <div
              className="feature3_img featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            ></div>
          </div>
        </div>

        {/* 4th card */}
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Stay Active</h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <div
              className="feature4_img featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            ></div>
          </div>
        </div>

        {/* 5th card */}
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">Listen to Music</h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <div
              className="feature5_img featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
