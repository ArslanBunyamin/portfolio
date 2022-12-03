import "./App.css";
import {
  FaEnvelope,
  FaFireAlt,
  FaInstagram,
  FaJs,
  FaLocationArrow,
  FaPhone,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
function App() {
  const activeLink = (e) => {
    [...document.querySelectorAll(".link")].forEach(
      (el) => (el.classList = "link")
    );
    e.target.classList.toggle("active");
  };
  return (
    <div className="container">
      <div className="navbar">
        <div className="name">Bünyamin Arslan</div>
        <div className="link-container">
          <a href="#home" onClick={activeLink} className="link active">
            HOME
          </a>
          <a href="#skills" onClick={activeLink} className="link">
            SKILLS
          </a>
          <a href="#aboutme" onClick={activeLink} className="link">
            ABOUT ME
          </a>
          <a href="#contactme" onClick={activeLink} className="link">
            CONTACT ME
          </a>
        </div>
      </div>
      <div className="main">
        <div id="home">
          <img
            alt="bg"
            className="background"
            src={require("./images/home.jpg")}
          />
          <div className="wrapper">
            <div className="img-container">
              <img alt="pp" src={require("./images/bünyamin arslan.png")} />
            </div>
            <div className="right">
              <div className="name">Bünyamin Arslan</div>
              <div className="frontend">Frontend</div>
              <div className="developer">Developer.</div>
              <div className="social">
                <a href="/">
                  <FaInstagram className="instgrm" />
                </a>
                <a href="/" className="twttr">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="skills">
          <div className="skill s1">
            <div className="js">
              <FaJs />
            </div>
            <div>JavaScript</div>
          </div>
          <div className="skill s2">
            <div className="react">
              <FaReact />
            </div>
            <div>React.js</div>
          </div>
          <div className="skill s3">
            <div className="firebase">
              <FaFireAlt />
            </div>
            <div>Firebase</div>
          </div>
        </div>
        <div id="aboutme">
          <img
            alt="bg"
            className="background"
            src={require("./images/aboutme.jpg")}
          />
          <div className="wrapper">
            <div className="hello">-Hello-</div>
            <div className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vestibulum ligula mi, ac posuere mi lobortis eu. Suspendisse
              ultricies lacus a ex pretium rutrum. Integer tincidunt felis ut ex
              dignissim hendrerit. Proin eleifend enim urna, luctus volutpat
              purus facilisis quis. Mauris elementum ante eu mattis dignissim.
              Phasellus imperdiet felis ac mi finibus, sit amet rutrum augue
              elementum. Proin ultricies, nisi at mollis vestibulum, ante elit
              laoreet tortor, in porttitor urna turpis at leo. Nunc et risus at
              ipsum sollicitudin sagittis sit amet varius dui. Vivamus
              ullamcorper tempus lacinia. Sed et magna lectus.
            </div>
          </div>
        </div>
        <div id="contactme">
          <div className="getintouch">-Get In Touch-</div>
          <div className="content">
            <div className="left">
              <div>
                <div className="header">Contact Me</div>
                <div className="info">
                  <FaLocationArrow className="logo" /> 500 Terry Francois
                  Street, San Francisco, CA 94158
                </div>
                <div className="info">
                  <FaEnvelope className="logo" /> info@mysite.com
                </div>
                <div className="info">
                  <FaPhone className="logo" /> 123-456-7890
                </div>
                <div className="footer">
                  © 2035 by Bünyamin Arslan. Powered and secured by Me:)
                </div>
              </div>
            </div>
            <div className="right">
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input className="phone" type="tel" placeholder="Phone" />
                <textarea
                  className="text-area"
                  type="text"
                  placeholder="Type your message here..."
                />
                <div className="submitWrapper">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
