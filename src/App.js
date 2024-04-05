import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Component/Navbar/Navbar1";
import Image from "./Component/Image/Image";
import Cards from "./Component/Cards/Cards";
import Features from "./Component/Features/Features";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar1 />
      <Image />

      <Features />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
