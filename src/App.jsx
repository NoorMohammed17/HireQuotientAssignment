import "./styles.css";
import Navbar from "./Navbar";
import Hero1 from "./Hero1";
import Hero2 from "./hero2";
import Column1 from "./Column1";
import Grid1 from "./Grid";
import Grid2 from "./Grid2";
import Column2 from "./Column2";
import Pricing from "./Pricing";
import Footer1 from "./Footer1";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Column1 />
      <Grid1 />
      <Grid2 />
      <Column2 />
      <Pricing />
      <Footer1 />
    </div>
  );
}
