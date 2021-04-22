import React, { Component } from 'react';



class About extends Component
{
   render()
   {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;

      }

      return (
         <section id="about">
            <div className="row">
               <div className="four columns">
                  <img style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} className="profile-pic" src={profilepic} alt="Muhammad Uzair" />
               </div>
               <div className="eight columns main-col">
                  <h2>About Me</h2>
                  <p>{bio}</p>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i> Download Resume</a>

                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns contact-details">
                        <h2>Language Proficiency</h2>
                        <p className="languages">
                           <span>English (UK/US) - Fluent</span><br />
                           <span>Urdu (اردو) - Native/Bilingual  </span><br />
                           <span>Pashto (پښتو) - Conversational</span><br />
                           <span>Hindi (हिंदी) - Conversational</span><br />
                           <span>Punjabi (پنجابی) - Conversational</span><br />
                           <span>Swedish (Svenska) - Basic</span><br />

                        </p>
                     </div>
                     {/* <div className="columns contact-details">
                         <h2>Language Proficiency</h2>
                         <p>dumy text</p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
               </div> */}
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
