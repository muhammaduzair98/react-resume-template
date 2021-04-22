import React, { Component } from 'react';

class Resume extends Component
{
  render()
  {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      // var profilepic = "images/" + this.props.data.image;
      var resumeDownload = this.props.data.resumedownload;



      var education = this.props.data.education.map(function (education)
      {
        return <div key={education.school}>




          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/nuceslogo.png" alt="Tim Baker Profile Pic" />

          <a href="http://www.nu.edu.pk">
            <h3 style={{ textAlign: "justify" }}>{education.school}</h3></a>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p>
          {/* <p><b>Major Courses:</b>{education.keycourses}</p> */}


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/Edwardes_College.jpg" alt="Tim Baker Profile Pic" />
          <a href="https://www.edwardes.edu.pk/">
            <h3>{education.school2}</h3></a>
          <p className="info">{education.degree2} <span>&bull;</span><em className="date">{education.graduated2}</em></p>
          <p>{education.description2}</p>


        </div>
      })
      var work = this.props.data.work.map(function (work)
      {
        return <div key={work.company}>


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/alpha.png" alt="Tim Baker Profile Pic" />
          <a href="http://www.alphalead.com/">
            <h3>{work.company}</h3></a>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          {/* <p>{work.description}</p> */}
          <p className="special">
            <h6>Job Responsibilities</h6>
            • Designing and develop the Frontend Features <br />
            • Identify user and system requirements for new websites and applications <br />
            • Communicating effectively with the company's clients. <br />
            • Responsible for complete SEO process and web analytics. <br />
            • Ensure company's software documentation is up-to-date
            </p>


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/fiverr3.png" alt="Tim Baker Profile Pic" />
          <a href="http://www.fiverr.com">
            <h3>Fiverr</h3>
          </a>
          <p className="info">Web Developer - Freelancer<span>&bull;</span> <em className="date">March 2016 - Present</em></p>
          <p className="special">
            <h6>Job Responsibilities</h6>
            Freelance Web Developer with over 4 years of experience. I run a successful digital agency that offers a wide range of services including, but not limited to web design, web development, graphic designing and Advance SEO. Feel free to reach out to me so we can start planning your next project!
            </p>


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/nuceslogo.png" alt="Tim Baker Profile Pic" />

          <a href="http://pwr.nu.edu.pk">
            <h3>FAST-National University, Peshawar Campus</h3>
          </a>
          <p className="info">Front Desk Admissions Officer - Internship<span>&bull;</span> <em className="date">July 2020 - September 2020</em></p>
          <p className="special">
            <h6>Job Responsibilities</h6>
            Within a centralized admissions environment and under the general direction of designated supervisor, performs duties related to the admission of undergraduate students to the University, in accordance with University and Department policies.
            </p>

        </div>



      })

      var work = this.props.data.work.map(function (work)
      {
        return <div key={work.company}>


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/alpha.png" alt="Tim Baker Profile Pic" />
          <a href="http://www.alphalead.com/">
            <h3>{work.company}</h3></a>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          {/* <p>{work.description}</p> */}
          <p className="special">
            <h6>Job Responsibilities</h6>
            • Designing and develop the Frontend Features <br />
            • Identify user and system requirements for new websites and applications <br />
            • Communicating effectively with the company's clients. <br />
            • Responsible for complete SEO process and web analytics. <br />
            • Ensure company's software documentation is up-to-date
            </p>


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/fiverr3.png" alt="Tim Baker Profile Pic" />
          <a href="http://www.fiverr.com">
            <h3>Fiverr</h3>
          </a>
          <p className="info">Web Developer - Freelancer<span>&bull;</span> <em className="date">March 2016 - Present</em></p>
          <p className="special">
            <h6>Job Responsibilities</h6>
            Freelance Web Developer with over 4 years of experience. I run a successful digital agency that offers a wide range of services including, but not limited to web design, web development, graphic designing and Advance SEO. Feel free to reach out to me so we can start planning your next project!
            </p>


          <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/nuceslogo.png" alt="Tim Baker Profile Pic" />

          <a href="http://pwr.nu.edu.pk">
            <h3>FAST-National University, Peshawar Campus</h3>
          </a>
          <p className="info">Front Desk Admissions Officer - Internship<span>&bull;</span> <em className="date">July 2020 - September 2020</em></p>
          <p className="special">
            <h6>Job Responsibilities</h6>
            Within a centralized admissions environment and under the general direction of designated supervisor, performs duties related to the admission of undergraduate students to the University, in accordance with University and Department policies.
            </p>

        </div>



      })

      var skills = this.props.data.skills.map(function (skills)
      {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1>Volunteer< br /> <span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/acm.png" alt="Tim Baker Profile Pic" />
            <a href="http://pwr.nu.edu.pk/acm">
              <h3>NUCES Peshawar ACM Student Chapter</h3>
            </a>
            <p className="info">Convener<span>&bull;</span> <em className="date">September 2020 - Present</em></p>
            <p className="special">
              <h6>Responsibilities</h6>

                  1- Student Convener will be a part of the Final Decisional Committee of Society.< br />
                  2- Convener will provide close liaison between Student Body and Faculty Heads.< br />
                  3- Convener reserve right to call a meeting of Student Body.< br />
                  4- Convener has to report Faculty Heads on a weekly or monthly basis about ACM activities.< br />
                  5- Convener will help to lead the teams alongside the executive student body.< br />
                  6- Any other tasks deemed necessary for the smooth conduct of ACM Activities.
             </p>


            <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/acm.png" alt="Tim Baker Profile Pic" />
            <a href="http://pwr.nu.edu.pk/acm">
              <h3>NUCES Peshawar ACM Student Chapter</h3>
            </a>
            <p className="info">Chapter Chairperon<span>&bull;</span> <em className="date">August 2019 - September 2020</em></p>
            <p className="special">
              <h6>Chapter Description</h6>
                  The Association for Computing Machinery at FAST National University of Computer & Emerging Sciences is glad to be viewed as a vital asset towards the scholastic and modern accomplishment of its individuals and graduated class.
             </p>


            <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/icetlogo.jpg" alt="Tim Baker Profile Pic" />
            <a href="http://icet.org.pk/2019/">
              <h3>15th IEEE International Conference on Emerging Technologies 2019 (ICET '19)</h3>
            </a>
            <p style={{ paddingLeft: "80px" }} className="info">Student Chair<span>&bull;</span> <em className="date">July 2019 - January 2020</em></p>
            <p className="special">
              <h6>Conference Description</h6>
                  The 15th International Conference on Emerging Technologies 2019 (ICET’19) was conducted on December 2nd - 3rd at the marvellous and historic city of Peshawar.
             </p>

            <img style={{ maxWidth: "80px", float: "left", paddingRight: "10px" }} src="./images/nutec19.png" alt="NUTEC" />
            <a href="http://pwr.nu.edu.pk/nutec">
              <h3>National University Technology Competition 2019 (NUTEC)</h3>
            </a>
            <p style={{ paddingLeft: "80px" }} className="info">Chief Operating Officer<span>&bull;</span> <em className="date">November 2018 - February 2019</em></p>
            <p className="special">
              <h6>Event Description</h6>
Established in 2009, The National University Technology Competition (NUTEC) is an inter - university, Student-run annual mega event. Over the years, it has achieved a status enviable prominence in the domain of higher education landscape of not only Khyber Pakhtunkhwa but across Pakistan.             </p>

          </div>



        </div>




        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p><i>"{skillmessage}"</i>
            </p>
            <div className="row skill">

              <div className="six columns main-col">
                <span><h5>Web Design/Development</h5></span>
                <p>HTML5, CSS3, Javascript, JQuery, Bootstrap, React JS, Node JS, PHP, Ajax, JSON, MySQL, MongoDB, Material UI     </p>
              </div>

              <div className="six columns main-col">
                <span><h5>Programming Languages</h5></span>
                <p>Python <br /> C++ <br />Java <br />Assembly Language     </p>
              </div>

              <div className="six columns main-col">
                <span><h4>DevOps</h4></span>
                <p>Docker, Containers, Networks, Storage, Compose Stack, Accessing Multiple Systems Remotely, Powered Less SSH, System Infrastructure Management Puppet, Master Creation, Controlling & Spawning New Agents</p>
              </div>

              <div className="six columns main-col">
                <span><h4>UI\UX Design</h4></span>
                <p>UI Prototyping, Wireframing, User Research, Usability Testing, Adobe XD, Adobe Photoshop, Adobe Illustrator</p>
              </div>

              <div className="six columns main-col">
                <span><h4>Simulation</h4></span>
                <p>Cinema 4D, Proteus Design Suite</p>
              </div>

              <div className="six columns main-col">
                <span><h4>SEO Optimization</h4></span>
                <p>SEO:: OFF Page, ON Page, Google:: Analytics, Webmaster, CMS SEO, Yoast SEO, Google RankMath, Conceptual Knowledge of Backlinks</p>
              </div>
              <div className="six columns main-col">
                <span><h4>CMS Builders</h4></span>
                <p>WordPress, Weebly, WiX, Space Square and Shopify</p>
              </div>

            </div>


            {/* <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div> */}
          </div>

        </div>
        <div className="row education">
          {/* <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div> */}

          <div className="nine columns main-col">
            {/* <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div> */}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Publication</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <a href="https://ieeexplore.ieee.org/document/8994728"><h3>Micro Hydro Power Plant using Sewage Water of Hayatabad Peshawar</h3></a>

                <p className="info">Published in: <a href="http://icet.org.pk/2019/"> 2019 IEEE 15th International Conference on Emerging Technologies</a> <em className="date">December 2019</em></p>
                <p className="special">
                  <h6>Abstract</h6>
Hydro power is one of the major sources of electric power. The latest trend of hydro power generation is mostly by micro hydropower. These plants are low cost, easy to install and ecofreindly. Sewage water can be one source of micro hydro power plants where low head screw turbines can be used to generate power... <i><a href="https://ieeexplore.ieee.org/document/8994728">Read More</a></i></p>
                <i><a href="https://ieeexplore.ieee.org/document/8994728">View Publication</a></i>
              </div>
            </div>
          </div>
        </div>

        <center>
          <h6><i>Want to know more about me? <br /> Click the button below and download my CV.</i></h6>
          <a href={resumeDownload} style={{ color: "#FFF" }} className="button"><i className="fa fa-download"></i> Download CV</a>
        </center>


      </section>
    );
  }
}

export default Resume;
