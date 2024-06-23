import "./index.css";

import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";

import Navbar from "../Navbar";
import About from "../About";
import ProductsSection from "../ProductsSection";
import FooterSection from "../FooterSection";

const Home = () => (
  <div className="home-page">
    <div className="banner-img">
      <Navbar />
      <div className="hero-section">
        <h2 className="banner-text">This choice is yours.</h2>
        <h2 className="banner-text">Because they don't have one.</h2>
        <div>
          <Popup
            model
            trigger={
              <button className="quick-view-button color">QUICK VIEW</button>
            }
            position="bottom left"
            className="popup-container"
          >
            {(close) => (
              <div className="model-container">
                <IoMdClose
                  size={20}
                  color="#231f20"
                  onClick={() => close()}
                  data-testid="close button"
                  className="close-button"
                />
                <div className="quick-view-card">
                  <div className="img-container">
                    <img
                      src="https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="main-img"
                      alt="main img"
                    />
                    <div className="optional-img">
                      <img
                        src="https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="option-img"
                        alt="small images"
                      />
                      <img
                        src="https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="option-img"
                        alt="small images"
                      />
                      <img
                        src="https://images.pexels.com/photos/210053/pexels-photo-210053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="option-img"
                        alt="small images"
                      />
                    </div>
                  </div>
                  <div className="details-container">
                    <h1 className="text-decoration product-heading">
                      Classic Green Vehicle
                    </h1>
                    <h2 className="text-decoration product-heading">MRP:</h2>
                    <h1 className="text-decoration product-heading">
                      Vintage Collections/-
                    </h1>
                    <hr className="hr-line" />
                    <p className="text-decoration">Product Description:</p>
                    <p className="text-decoration">
                      This product packs an extra punch, thanks to the literal
                      blood, sweat and tears of a young boy.
                    </p>
                    <hr className="hr-line" />
                    <p className="text-decoration">Product Contents:</p>
                    <ul>
                      <li className="text-decoration">
                        10 hand-hurting pieces of rassi bombs
                      </li>
                      <li className="text-decoration">
                        Jilled with great pain
                      </li>
                      <li className="text-decoration">Raju’s hopes</li>
                    </ul>
                    <hr className="hr-line" />
                    <p className="text-decoration">Shopping Time:</p>
                    <p className="text-decoration">
                      Before Raju understands that his dreams do not matter.
                    </p>
                    <button className="choose-now-button">Choose Now</button>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
    <About />
    <ProductsSection />
    <FooterSection />
  </div>
);

export default Home;
