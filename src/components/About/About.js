import React from 'react';

import './About.css';

import trophy from '../../assets/img/about-trophy.png';

const about = React.forwardRef((props, ref) => (
  <section id="about" ref={ ref } className="section about padding-large">
    <div className="content-container-about">
      <div></div>
      <div className="push">
        <p className="large dark">
          For the first time, Superunion is opening our Best In Class program 
          applications to companies and interns in America. Historically, 
          Best In Class focused on businesses and interns located in or near 
          our office in New York City. <br/><br/>
          But the COVID-19 pandemic has shifted how we work; 
          from a 100% in-office culture to more flexible ways of working. 
          For our interns, this means we can explore a flexible working 
          option based on where they are located. For companies, 
          we can now accept a wider range of applicants - and after a year 
          that created challenges for businesses across the country, we see 
          this as a huge advantage for a brand that needs help now – free of charge.<br/><br/>
          The chosen company applicant will have access to some of the sharpest 
          and most creative brains and rising talent in the industry. 
          The chosen client will bring a real-world project to our intern class, 
          comprised of a team of designers, strategists, and account managers, 
          who will tackle their brand challenge over the course of 10 weeks. 
          With oversight from our leadership team, we’ll give our Best In Class 
          team an incredible experience working on a real-world project and the 
          client a scope of work, delivered at no cost.<br/><br/>
          Some of the best projects completed by past Best In Class teams 
          include for the brand refresh for Urban Justice Center, which won 
          multiple awards –  including the Grand Prix at the 2019 Transform Awards. 
        </p>
      </div>
      <div 
        className="about-img push" 
        style={{ textAlign: "center", paddingTop: "5rem" }}>
        <img 
          className="responsive"
          src={trophy}
          alt="About Trophy"/>
      </div>
    </div>
  </section>
));

export default about;
