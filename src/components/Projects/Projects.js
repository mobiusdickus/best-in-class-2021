import React from 'react';

import importImages from '../../helpers/importImages';

import './Projects.css';


const images = importImages()

const projects = React.forwardRef((props, ref) => (
  <section id="previous-work" ref={ ref } className="previous-work padding-large bg-dark">
    <div className="previous-work-container">
      <div>
        <h2 className="outline-light" style={{ paddingBottom: '2rem' }}>GET INSPIRED</h2>
        <p className="large light" style={{ paddingBottom: '8rem' }}>
          A BEST IN CLASS MASTERPIECE<br/>
          Creating an Award-Winning New Brand for Urban Justice Center
        </p>
      </div>
      <div className="videoWrapper">
        <iframe
          title="video"
          src="https://player.vimeo.com/video/516441529"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen/>
      </div>
      <div className="previous-work-info">
        <div className="paragraph">
          <p className="light">
            Urban Justice Center, a social justice incubator, cultivates non-profit initiatives that advocate for legislative change and provides free legal support to marginalized citizens. Since its founding, the initiatives grew in scale and exposure causing key stakeholders to lose sight of the master brand’s value. However, with a discordant political climate, only a new and stronger brand could garner donations and rally advocates.    
          </p>
        </div>
        <div className="paragraph">
          <p className="light">
            Our 2018 Best In Class team created a powerful positioning and modern visual identity that elevated the brand above its initiatives. We modernized and future-proofed the brand in a cost-effective way that empowered the Urban Justice Center team to re-establish what it stood for, attract more incubator applications, and point marginalized citizens to the quickest path to help. The work was recognized with seven Transform Awards, including Gold for Best Creative Strategy, the Best Overall Visual Identity, and the Grand Prix.   
          </p>
        </div>
      </div>
      <div className="previous-work-imgs">
        <div className="imgs">
          <img
            className="responsive"
            src={ images["previous-work-01@2x.png"].default }
            alt="work-1"/>
        </div>
        <div className="imgs">
          <img 
            className="responsive"
            src={ images["previous-work-02@2x.png"].default }
            alt="work-2"/>
        </div>
      </div>
      <div className="quote">
        <p className="light large">
          “Superunion helped Urban Justice Center find its true identity and voice - they took the time to learn who we are, what we do, and what drives our passion and our work. Superunion helped us create a refreshed brand that sets us apart and enables us to tell our story as a galvanizing force for both our organization and incubator projects.”
        </p>
        <div className="quote-trophy">
          <img
            className="responsive"
            src={ images["quote-teophy@2x.png"].default }
            width="80px"
            alt="work-3"/>
        </div>
        <h4 className="light" style={{ paddingBottom: '1rem' }}>Sara Solfanelli</h4>
        <p className="light small" style={{ paddingBottom: '1rem' }}>CHIEF OPERATING & GENERAL COUNSEL URBAN JUSTICE CENTER</p>
      </div>
    </div>
  </section>
));

export default projects;
