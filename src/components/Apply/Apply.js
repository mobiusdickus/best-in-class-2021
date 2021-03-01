import React from 'react';

import image from '../../assets/img/dog-footer@2x.png';

import './Apply.css';


const apply = React.forwardRef((props, ref) => (
  <section id="apply" ref={ ref } className="got-what-it-takes padding-large bg-dark">
    <div className="got-what-it-takes-content">
      <div className="got-what-it-takes-container">
        <div className="left">
          <h1 className="light">READY TO<br/>JOIN US?</h1>
          <p className="join-copy light">
            Superunion is a next-generation brand agency built on a spirit of creative optimism. We believe in the power of creativity to improve the future of people and organizations. We are experts in brand strategy, design, communications, and brand management.
          </p>
          <div className="cta-intro-footer">
            <div className="submit-project-footer">
              <a href="https://www.superunion.nyc/best-in-class/submit-company/"
                target="_blank"
                rel="noreferrer">
                <p className="small light">
                  put some brilliant<br/>
                  minds to work for you 
                </p>
                <h3 className="light">SUBMIT YOUR PROJECT</h3>
              </a>
            </div>
            <div className="submit-intern-footer">
              <a href="https://www.superunion.com/join/description/?id=2752618"
                target="_blank"
                rel="noreferrer">
                <p className="small light">
                  YOUR FUTURE<br/>
                  STARTS RIGHT NOW
                </p>
                <h3 className="light">APPLY TO BE AN INTERN</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="dog-img">
            <img className="responsive"
              src={ image }
              alt="Dog Footer"/>
          </div>
        </div>
      </div>
    </div>
  </section> 
));

export default apply;
