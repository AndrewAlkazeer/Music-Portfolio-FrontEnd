// NOT CHANGE JUST A COMMENT

// import logo from './logo.svg';
import './App.css';
import './mobile.css';
import './mobile.js';
import './colorChange.js';
import Sketch from './p5.js';
import MatterJS from './MatterJS.js';
import Music from './music/Street-Art.mp3';
//import '../build/favicon.ico';
import './favicon.ico';
import axios from 'axios';
import React, { Component } from 'react';
import Logo from './images/logo.svg';
import Hero from './images/hero.png';
import PortfolioImage from './images/Portfolio-image2.png';
import profileImg from './images/Resume Photo.png';
import Resume from './images/Andrew-Alkazeer-Resume.pdf';
import project1 from './images/Full-screenshot/App-Reviews-modified.png';
import project2 from './images/Full-screenshot/Personal-Portfolio-modified.png';
import project3 from './images/Full-screenshot/Car-Insurance-modified.png';
import project4 from './images/Full-screenshot/Book-A-Flight-modified.png';
import project5 from './images/Full-screenshot/Marketing-Platform-modified.png';
import project6 from './images/Full-screenshot/My-Previous-portfolio.png';
import project7 from './images/Full-screenshot/admin-dashboard.png';
import project8 from './images/Full-screenshot/Login-page.png';
import project9 from './images/Full-screenshot/image-effects.png';
import project10 from './images/Full-screenshot/Clips.png';
import firebase from './firebaseConfig';
//import { Db } from 'mongodb';

// Redirect to Resume PDF if on resume.andrewalkazeer.dev
// 1) Strip off “www.” so both “www.resume.andrewalkazeer.dev” 
    //    and “resume.andrewalkazeer.dev” normalize to the same.
    const host = window.location.hostname.replace(/^www\./, "");
    const path = window.location.pathname.replace(/\/$/, "");

    // 2) If we’re at the root ("/"), send them straight to the PDF:
    if (host === "resume.andrewalkazeer.dev" && (path === "" || path === "/")) {
      console.log("Redirecting to Resume PDF…");
      window.location.href = "/assets/Resume.pdf";
    }
/*
import project1 from './images/01_Screenshot (2).jpg';
import project2 from './images/login with register backend.png';
import project3 from './images/Angular-App.png';
import project4 from './images/Login Screen.jpg';
import project5 from './images/Marketing Platform.jpg';
import project6 from './images/Book a Flight.png';
import project7 from './images/Car Insurance.png';
import project8 from './images/App Reviews.png';
*/

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      loves: [],
      Ip: [],
      ipInfo: [],
      firebaseDB: [],
      result: [],
      autoDateUpdate: new Date().getFullYear(),
      phone: "N/A"
    })

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount = () =>{
     // Not Saving new users Starts Here
     
    axios.get('https://api.ipdata.co/?api-key=5c0acf227e6bb4bb352a10d2a5911e171d9d4553ed4b0bd8aeda4d93').then(i =>{
    this.setState({ipInfo: i.data});

     var database = firebase.database();
     var ref = database.ref('vistorByCountry/');

     var info = {
       Country: this.state.ipInfo.country_name,
       Flag: this.state.ipInfo.flag,
       Count: 1
     }

     ref.once('value', gotData, errData);
       
       function gotData(data) {
         
         var firebaseDB = data.val();
       //  console.log(firebaseDB);

         if (firebaseDB === null) {
           ref.push(info);
        //   this.setState({ vistorByCountry: info });
        
           // If Null Result from firebase Databse      
         } else{

           var keys = Object.keys(firebaseDB);
           var found = false;
           var isCount = false;
           var countryFound = false;
           for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            var Country = firebaseDB[key].Country;
            var Count = firebaseDB[key].Count;
            
           if(Country == info.Country && !countryFound){
             var uniqueKey = key;
             var Counter = Count;
           //  console.log('current Counter is '+ Counter);
          //   visitorRef.update({Count: c});
              found = true;
              countryFound = true;
           //  console.log('if(Country == info.Country && !countryFound)');
           }
           }
           if(!found){
              ref.push(info);
            // console.log('if(!found)');
             var found = true;
             }
             if(!isCount){
              Counter++;
              var visitorRef = database.ref('vistorByCountry/' + uniqueKey);
              visitorRef.update({Count: Counter});
              var isCount = true;
            //  console.log('the unique key is ' + uniqueKey);
            //  console.log('passed the isCount if statement ' + Counter);
            //  console.log('if(!isCount)');
             }
          }
        }
        function errData(err) {
        //  console.log('Error!');
        //  console.log(err);
        }

       //Retraiving the data from Firebase database
     axios.get('https://my-awesome-project-fc911.firebaseio.com/vistorByCountry.json').then(dd =>{
       //this.setState({firebaseDB: dd.data});
      // console.log(dd.data);
       var k = Object.keys(dd.data);
      var arr = [];
       for(var i = 0; i < k.length; i++){
        var keys = k[i];

        var obj = {
          Country: dd.data[keys].Country,
          Flag: dd.data[keys].Flag,
          Count: dd.data[keys].Count
        }
        arr.push(obj);
        this.setState({firebaseDB: arr});
       }
    })
    // Not Saving new users Ends Here
  })
  }
  
  componentDidMount = () => {
    axios.get('/hearts').then(love => {
      this.setState({ loves: love.data });
    //  console.log(this.state.loves);
    });

//Retraiving the data from Firebase database and constantly updating info
/*
axios.get('https://my-awesome-project-fc911.firebaseio.com/vistorByCountry.json').then(db =>{
  //this.setState({firebaseDB: dd.data});
 // console.log(dd.data);
  var k = Object.keys(db.data);
 var arr = [];
  for(var i = 0; i < k.length; i++){
   var keys = k[i];

   var obj = {
     Country: db.data[keys].Country,
     Flag: db.data[keys].Flag
   }
   arr.push(obj);
   this.setState({result: arr});
   // arrC.push(dd.data[keys].Country);
   // arrF.push(dd.data[keys].Flag);
  }
 // console.log(this.state.firebaseDB);

})
*/
  }
  // Handling Submission for Contact Form
  handleSubmit(e) {
    e.preventDefault();
    
    // const [name, email, phone, message] = this.state;
    const contact = {
      Name: this.state.name,
      Email: this.state.email,
      Phone: this.state.phone,
      Message: this.state.message
    }
    
    alert("Your Message Has Been Sent Successfully!");
    var database = firebase.database(); // Will be removed later
    var ref2 = database.ref('Contacts/');
    ref2.push(contact);
  }
 // Saving form data to a state
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    // USING FOREACH TO SORT THE VISITORS list by number of visits
    var sortedCount = [];
    var sortedVisitors = [];

    this.state.firebaseDB.map(item =>{
      item.isCounted = false;
     sortedCount.push(item.Count);
    })
    sortedCount.sort((a, b)=>{
      return b-a;
    })
    sortedCount.map(i =>{
    this.state.firebaseDB.map(ii =>{
      if(i == ii.Count && ii.isCounted == false){
        ii.isCounted = true;
        sortedVisitors.push(ii);
      }
    })
    })
    var totalVisitorsCounted = sortedVisitors.map((v) => {return (
      <div className="main-visitors-cont" style={{position: "relative", width: "100%", height: "25px", background: "transparent", marginTop: "5px", marginBottom: "5px"}}><img src={v.Flag} alt="Country Flag" style={{float: "left", height: "100%", width: "35px"}} /><p color-theme="red" className="visitors-count" style={{float: "left", margin: "0", display: "inline-block", fontFamily: "'Poppins', sans-serif", fontSize: "15px", background: "transparent", fontWeight: "bold", marginLeft: "5px", marginRight: "5px", marginTop: "2px"}}>{v.Count}</p><h4 className="country-name" style={{float: "left", margin: "0", display: "inline-block", marginTop: "3px"}}>{v.Country}</h4></div>
    )})

    return (
      <React.Fragment>
{/* Music Equalizer */}
<audio autoplay loop>
<source src={Music} type="audio/mpeg" autoPlay />
</audio>
<div className="music-equalizer-cont">
<div className="music-eq-orange music-eq"></div>
<div className="music-eq-lightblue music-eq"></div>
<div className="music-eq-lightgreen music-eq"></div>
<div className="music-eq-red music-eq"></div>
<div className="music-eq-purple music-eq"></div>
</div>
      {/* Navbar elements */}
<nav>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 324">
  <defs>
    <clipPath id="clip-Web_1920_1">
      <rect width="565" height="324"/>
    </clipPath>
  </defs>
  <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-Web_1920_1)">
    <rect id="Rectangle_11" data-name="Rectangle 11" width="323" height="77" rx="38.5" transform="translate(491.434 329.07) rotate(-111)"/>
    <rect id="Rectangle_8" data-name="Rectangle 8" width="323" height="77" rx="38.5" transform="translate(209.434 329.07) rotate(-111)"/>
    <rect id="Rectangle_7" svg-color-change="red" width="563" height="54" rx="27" transform="translate(0 164)" fill="#dd2020"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="323" height="77" rx="38.5" transform="matrix(0.358, -0.934, 0.934, 0.358, -0.319, 301.476)"/>
    <rect id="Rectangle_10" data-name="Rectangle 10" width="323" height="77" rx="38.5" transform="matrix(0.358, -0.934, 0.934, 0.358, 281.681, 301.476)"/>
  </g>
</svg>
<ul className="visible-lg visible-md">
<li><a color-theme="red" id="about" href="#about-page-cont">About</a></li>
<li><a id="work" href="#page-2">Work</a></li>
<li><a id="services" href="#page-3">Services</a></li>
<li><a id="contact" href="#page-4">Contact</a></li>
</ul>
<div className="social-media-cont">
<i title='LinkedIn' onClick={()=>{window.open('https://www.linkedin.com/in/andrewalkazeer/')}} color-theme="red" className="fab fa-linkedin-in"></i>
<i title='Github' onClick={()=>{window.open('https://github.com/AndrewAlkazeer')}} color-theme="red" className="fab fa-github"></i>
<i title='CodePen' onClick={()=>{window.open('https://codepen.io/collection/nayNOa')}} color-theme="red" className="fab fa-codepen"></i>
<i title='FreeCodeCamp' onClick={()=>{window.open('https://www.freecodecamp.org/andrewalkazeer')}} color-theme="red" className="fab fa-free-code-camp"></i>
</div>

{/* Mobile Nav btn */}
<div class="mobile-nav-btn-cont visible-sm visible-xs">
<div class="one"></div>
<div class="two"></div>
<div class="three"></div>
</div>
</nav>

{/* Mobile collapse menu */}


<div class="mobile-collapse-menu visible-sm visible-xs">
      
     <div className="nav-btns-cont">
           <ul>
           <li><a href="#about-page-cont">About</a></li>
           <li><a href="#page-2">Work</a></li>
           <li><a href="#page-3">Services</a></li>
           <li><a href="#page-4">Contact</a></li>
           </ul>
     </div>

     <div className="social-media-cont-mobile">
        <i title='LinkedIn' onClick={()=>{window.open('https://www.linkedin.com/in/andrewalkazeer/')}} className="fab fa-linkedin-in"></i>
        <i title='Github' onClick={()=>{window.open('https://github.com/AndrewAlkazeer')}} className="fab fa-github"></i>
        <i title='CodePen' onClick={()=>{window.open('https://codepen.io/collection/nayNOa')}} className="fab fa-codepen"></i>
        <i title='FreeCodeCamp' onClick={()=>{window.open('https://www.freecodecamp.org/andrewalkazeer')}} className="fab fa-free-code-camp"></i>
     </div>
</div>


{/* -------------------------------------------------------- */}

{/* Color Change Menu */}

<div className="color-menu-cont">
<div className="color-bar"></div>
<div className="coral"></div>
<div className="lightblue"></div>
<div className="lightgreen"></div>
<div className="red"></div>
<div className="purple"></div>
</div>

{/* -------------------------------------------------------- */}

{/* Visitors Menu */}

<div className="visitors-menu-cont">
<div className="i-cont"><i color-theme="red" className="fas fa-globe-americas"></i></div>
<div style={{position: "relative", overflowY: "scroll", height: "100%", width: "100%", marginLeft: "5px"}}>{totalVisitorsCounted}</div>
</div>

{/* -------------------------------------------------------- */}

{/* About Page - Page 1 */}
<div className="about-page-cont" id="about-page-cont">
{/* <Sketch /> */}
<MatterJS />

   <div className="cont">
   <h1>Andrew Alkazeer</h1>
   <h2>I Am <span color-theme="red">Web Developer</span></h2>
   <p>I can create and maintain a proficient static and dynamic websites. I am a self-directed, lifelong learner, who is hard working and a problem solver. I have a passion for web programming and can work independently as well as within a team, providing excellent and high-quality work. Please check out the linked resume to see my detailed Skills!</p>
   <button onClick={()=>{window.open(Resume + "#view=Fit", "_blank")}} color-theme="red">Download CV<i className="fas fa-download"></i></button>
   </div>
   <img src={PortfolioImage} alt="Portfolio Image" />
</div>
{/* -------------------------------------------------------- */}

{/* Projects Page - Page 2 */}

<div className="projects-page-cont" id="page-2">
<h1>MY WORK</h1>
<div bg-color-theme="red" className="barD"><div bg-color-theme="red" className="divider"></div></div>
<div className="projects-cont">
<div className="project project-1"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Clips</h1><p>Technologies: Angular, Webpack, Web Assembly, Tailwind, Firebase.</p><div className="btn-cont"><button onClick={()=>{window.open('https://clips-mauve.vercel.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/Clips')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project10} alt="Project 10" /></div></div>
<div className="project project-2"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Image Effects</h1><p>Technologies: Rust, Webpack, Web Assembly.</p><div className="btn-cont"><button onClick={()=>{window.open('https://image-effects-peach.vercel.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/image-effects')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project9} alt="Project 9" /></div></div>

<div className="project project-3"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">App Reviews</h1><p>Technologies: HTML, CSS3, Bootstrap, and Vanilla JS.</p><div className="btn-cont"><button onClick={()=>{window.open('https://distracted-kirch-93c03f.netlify.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/AppReviews-UI')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project1} alt="Project 1" /></div></div>
<div className="project project-4"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Personal Portfolio</h1><p>Technologies: HTML, CSS3, Bootstrap, and Vanilla JS.</p><div className="btn-cont"><button onClick={()=>{window.open('https://romantic-mayer-479121.netlify.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/Freelance-Work-1')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project2} alt="Project 2" /></div></div>
<div className="project project-5"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Car Insurance</h1><p>Technologies: HTML, CSS3, Bootstrap, and Vanilla JS.</p><div className="btn-cont"><button onClick={()=>{window.open('https://quirky-mirzakhani-142d16.netlify.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/Car-Insurance-Landing-Page')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project3} alt="Project 3" /></div></div>
<div className="project project-6"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Book a Flight</h1><p>Technologies: HTML, CSS, and Bootstrap 3.</p><div className="btn-cont"><button onClick={()=>{window.open('https://upbeat-swartz-78b5b9.netlify.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/Book-a-Flight')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project4} alt="Project 4" /></div></div>
<div className="project project-7"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Marketing Platform</h1><p>Technologies: HTML, CSS, Bootstrap 3 & 4, and Adobe Photoshop.</p><div className="btn-cont"><button onClick={()=>{window.open('https://silly-heisenberg-501912.netlify.app')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/Marketing-Platform-For-Instagram')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project5} alt="Project 5" /></div></div>
<div className="project project-8"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">My Previous Portfolio</h1><p>Technologies: HTML5, CSS3, Bootstrap, React, NodeJS, Express, MongoDB, Firebase, and RESTful API.</p><div className="btn-cont"><button onClick={()=>{window.open('https://my-portfolio-backend-n6wb.onrender.com')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/My-Portfolio-BackEnd')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project6} alt="Project 6" /></div></div>
<div className="project project-9"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Admin Dashboard</h1><p>Technologies: HTML, CSS, FlexBox, React, React-Router, NodeJS, Express, MongoDB, Firebase, and RESTful API.</p><div className="btn-cont"><button onClick={()=>{window.open('https://admin-dashboard-tqx1.onrender.com/')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/Admin-Dashboard')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project7} alt="Project 7" /></div></div>
<div className="project project-10"><div className="project-img-cont"><div className="hidden-menu"><h1 color-theme="red">Login Page</h1><p>Technologies: HTML, CSS, Bootstrap, React, React-Router, NodeJS, Express, MongoDB, Mongoose, and RESTful API.</p><div className="btn-cont"><button onClick={()=>{window.open('https://login-ui-react-node-mongoose.herokuapp.com')}} btn-hover-color="red">View Demo</button><button onClick={()=>{window.open('https://github.com/AndrewAlkazeer/login-ui-backend')}} btn-hover-color="red">View Code</button></div></div><img className="project-img" src={project8} alt="Project 8" /></div></div>
</div>
</div>

{/* -------------------------------------------------------- */}

{/* Services Page - Page 3 */}

<div className="services-page-cont" id="page-3">
<h1>WHAT DO I OFFER ?</h1>
<div bg-color-theme="red" className="barD"><div bg-color-theme="red" className="divider"></div></div>
<p>Obviously I'm a Web Developer. Experienced with all stages of the development cycle for dynamic and static web projects.</p>
<div className="container services-cont">
<div className="row">
<div className="col-lg-4 col-md-4 col-sm-6 service"><div className="service-cont s1-cont"><div bg-color-theme="red" className="bar"></div><i color-theme="red" className="fas fa-palette"></i><h1 color-theme="red" id="s1">UX / UI</h1><p>Creating user friendly web and easy maintainable pages with modern user interface design.</p></div></div>
<div className="col-lg-4 col-md-4 col-sm-6 service"><div className="service-cont s2-cont"><div bg-color-theme="red" className="bar"></div><i color-theme="red" className="far fa-file-code"></i><h1 color-theme="red" id="s2">Front-End</h1><p>Providing the best solution for the client to build and maintain the front end side of the web pages.</p></div></div>
<div className="col-lg-4 col-md-4 col-sm-6 service"><div className="service-cont s3-cont"><div bg-color-theme="red" className="bar"></div><i color-theme="red" className="fas fa-laptop-code"></i><h1 color-theme="red" id="s3">Back-End</h1><p>Providing the best solution for the client to work on the back end side of the web pages.</p></div></div>
<div className="col-lg-4 col-md-4 col-sm-6 service"><div className="service-cont s4-cont"><div bg-color-theme="red" className="bar"></div><i color-theme="red" className="fas fa-server"></i><h1 color-theme="red" id="s4">Database</h1><p>Working on the database as needed to provide service for front end or/and back end.</p></div></div>
<div className="col-lg-4 col-md-4 col-sm-6 service"><div className="service-cont s5-cont"><div bg-color-theme="red" className="bar"></div><i color-theme="red" className="far fa-object-group"></i><h1 color-theme="red" id="s5">Web Design</h1><p>Creating Graphic Design elements such as logos and images for web pages.</p></div></div>
<div className="col-lg-4 col-md-4 col-sm-6 service"><div className="service-cont s6-cont"><div bg-color-theme="red" className="bar"></div><i color-theme="red" className="fas fa-user-lock"></i><h1 color-theme="red" id="s6">Security</h1><p>Securing Web apps from web attacks such as MITM ,DoS, and XSS. Create SSL cert. for web pages.</p></div></div>
</div>
</div>
</div>

{/* -------------------------------------------------------- */}

{/* Lets Talk Section - Between Page 3 and Page 4 */}

<div className="container talk-section-cont">
<div className="row">
<div className="col-lg-6 col-md-6 title-cont"><h1>Lets Talk and have a cup of coffee</h1></div>
<div className="col-lg-6 col-md-6 title-btn-cont"><a href="#page-4"><button color-theme="red"><div className="block-cont"><div bg-color-theme="red" className="block-1"></div><div className="block-2"></div></div>Contact</button></a></div>
</div>
</div>

{/* -------------------------------------------------------- */}

{/* contact Page - Page 4 */}

<div className="container contact-page-cont" id="page-4">
<h1>CONTACT</h1>
<div bg-color-theme="red" className="barD"><div bg-color-theme="red" className="divider"></div></div>
<div className="row">
<div className="col-lg-4 contact"><i className="fas fa-mobile-alt"></i><h4>PHONE</h4><h5>Please leave a voicemail if I did not answer and I will get back to you ASAP!</h5><p color-theme="red">(615)-584-5087</p></div>
<div className="col-lg-4 contact"><i className="far fa-envelope"></i><h4>EMAIL</h4><h5>Please send me an email and I will get back to you in less than 24 hrs.</h5><p color-theme="red">andrewalkazeer@outlook.com</p></div>
<div className="col-lg-4 contact"><i className="fas fa-map-marker-alt"></i><h4>LOCATION</h4><h5>I can commute for up to 20 miles or work remotely.</h5><p color-theme="red">Westminster, CO</p></div>
</div>
<div className="row">
<form onSubmit={this.handleSubmit}>
<div className="col-lg-6">
<input type="text" name="name" placeholder="First Name*:" onChange = {this.handleChange} required />
<input type="email" name="email" placeholder="Your email*:" onChange = {this.handleChange} required />
<input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Phone No:" onChange = {this.handleChange} />
<small>Format: 123-456-7890</small>
</div>
<div className="col-lg-6 contact">
<textarea type="text" name="message" placeholder="Your Message*:" onChange = {this.handleChange} required />
<button bg-color-theme="red" type='submit'>Send Message</button>
</div>
</form>
</div>
</div>

{/* -------------------------------------------------------- */}

{/* Footer Section */}

<footer className="container-fluid">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 324">
  <defs>
    <clipPath id="clip-Web_1920_1">
      <rect width="565" height="324"/>
    </clipPath>
  </defs>
  <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-Web_1920_1)">
    <rect id="Rectangle_11" data-name="Rectangle 11" width="323" height="77" rx="38.5" transform="translate(491.434 329.07) rotate(-111)"/>
    <rect id="Rectangle_8" data-name="Rectangle 8" width="323" height="77" rx="38.5" transform="translate(209.434 329.07) rotate(-111)"/>
    <rect id="Rectangle_7" svg-color-change="red" width="563" height="54" rx="27" transform="translate(0 164)" fill="#dd2020"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="323" height="77" rx="38.5" transform="matrix(0.358, -0.934, 0.934, 0.358, -0.319, 301.476)"/>
    <rect id="Rectangle_10" data-name="Rectangle 10" width="323" height="77" rx="38.5" transform="matrix(0.358, -0.934, 0.934, 0.358, 281.681, 301.476)"/>
  </g>
</svg>
<hr />
<p>© {this.state.autoDateUpdate.toString()} - Designed and Coded with <i className="fas fa-heart"></i> By Andrew Alkazeer.</p>
</footer>

      </React.Fragment>
    )
  }
}

export default App;
