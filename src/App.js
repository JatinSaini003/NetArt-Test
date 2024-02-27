import logo from '../src/asserts/logo.png';
import award from '../src/asserts/1.png';
import intro_image from '../src/asserts/2.png';
import product_Image from '../src/asserts/3.png';
import { FaFacebookF } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import data from './data.js';
import './App.css';

function App() {
  console.log(data)
  return (
    <div className="App">

      <div className="header_logo">
        <img src={logo} alt='CRI_Fluid_Systems Logo'></img>
      </div>

      <div className="intro_section">
        <div className='award'>
          <img src={award} alt="" />
        </div>

        <div className="introduction">
          <div className="intro_head">
            <h4>{data.intro_head_line}</h4>
            <ul>
              <li>{data.intro_head_p1}</li>
              <li>{data.intro_head_p2}</li>
            </ul>
          </div>
          <img src={intro_image} alt="Award_receiving_Image"></img>
          <div className="intro_tail">
            <p>{data.intro_tail}</p>
          </div>
        </div>
      </div>

      <p className='middle_section'>{data.mid_section_text}</p>

      <div className="product_image">
        <img src={product_Image} alt="Products_Image" />
        <figcaption>{data.image_caption}</figcaption>
      </div>

      <div className="bottom_section">
        <h5>{data.footer_head}</h5>
        <p>{data.footer_text}</p>
      </div>

      <footer>
        <div className="contactdiv footer">
          <div className="Icon">
            <FaPhoneAlt />
          </div>
          <p>{data.contact}</p>
        </div>
        <div className="facebookdiv footer">
          <div className="Icon">
            <FaFacebookF />
          </div>
          <p>{data.facebook}</p>
        </div>
        <div className="websitediv footer">
          <div className="Icon globe">
            <CiGlobe size={50} />
          </div>
          <p>{data.website}</p>
        </div>
      </footer>

    </div>

  );
}

export default App;
