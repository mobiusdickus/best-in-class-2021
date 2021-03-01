import React from 'react';

import Bio from '../Bio/Bio';
import importImages from '../../helpers/importImages';

import './Quotes.css';



const images = importImages();

const interns = [{
    'firstName': "LILLY",
    'lastName': 'THALER',
    'jobTitle': 'FREELANCE STRATEGIST',
    'image': images['headshot-lilly@2x.png'].default,
    'imgAlt': "Lilly Headshot",
    'classYear': "2020",
    'quote': 'I felt so welcomed by the Superunion family from day one. It’s still so weird that I’ve never met anyone in person because it feels like I have.'
  }, {
    'firstName': 'CHLOE',
    'lastName': 'PARK',
    'jobTitle': 'ASSOCIATE DESIGNER',
    'image': images['headshot-chloe@2x.png'].default,
    'imgAlt': 'Chloe Headshot',
    'classYear': '2019',
    'quote': 'I never felt like I was “just an intern”. I was able to get a hands-on experience everyday, presenting real client work, and I always felt my opinion was valued.'
  }, {
    'firstName': 'ANJELICA',
    'lastName': 'CLAXTON',
    'jobTitle': 'STRATEGIST',
    'image': images['headshot-anjelica@2x.png'].default,
    'imgAlt': 'Anjelica Headshot',
    'classYear': '2018',
    'quote': 'This internship program is both challenging and rewarding. It was great to work with other interns and mentors who pushed my ways of thinking.'
  }, {
    'firstName': 'WOOJIN',
    'lastName': 'CHUNG',
    'jobTitle': 'DESIGNER',
    'image': images['headshot-woojin@2x.png'].default,
    'imgAlt': 'Woojin Headshot',
    'classYear': '2018',
    'quote': 'This was not a typical internship I could find elsewhere. I learned to change, evolve, and transform through opportunities and real clients.'
}];

const mentors = [{
    'firstName': 'HARLIE',
    'lastName': 'BRINDAK',
    'jobTitle': 'CREATIVE DIRECTOR',
    'image': images['headshot-harlie@2x.png'].default,
    'imgAlt': 'Harlie Headshot'
  }, {
    'firstName': 'IAN',
    'lastName': 'CULLEY',
    'jobTitle': 'CREATIVE TECHNOLOGIST',
    'image': images['headshot-ian@2x.png'].default,
    'imgAlt': 'Ian Headshot'
  }, {
    'firstName': 'ROSS',
    'lastName': 'CLUGSTON',
    'jobTitle': 'EXECUTIVE CREATIVE DIRECTOR',
    'image': images['headshot-ross@2x.png'].default,
    'imgAlt': 'Ross Headshot'
  }, {
    'firstName': 'JENNIFER',
    'lastName': 'VOLMER',
    'jobTitle': 'CO-HEAD OF STRATEGY',
    'image': images['headshot-jenn@2x.png'].default,
    'imgAlt': 'Jennifer Headshot'
}];

const setBios = (props) => {
  return (
    props.isIntern ? interns.map((d) => 
      <Bio
        firstName={ d.firstName }
        lastName={ d.lastName }
        jobTitle={ d.jobTitle }
        imgSrc={ d.image }
        imgAlt={ d.imgAlt }
        classYear={ d.classYear }
        quote={ d.quote }
        isIntern={ props.isIntern }/>
    ) : mentors.map((d) =>
      <Bio
        firstName={ d.firstName }
        lastName={ d.lastName }
        jobTitle={ d.jobTitle }
        imgSrc={ d.image }
        imgAlt={ d.imgAlt }
        isIntern={ props.isIntern }/>
    )
  );
};



const quotes = React.forwardRef((props, ref) => (
  <section id={ props.id } ref={ ref } className={ props.classes.section }>
    <div className="hear-from-the-best-container">
      <div>
        <h2 className="outline dark">{ props.title }</h2>
        { props.isIntern ? null : <p className=" mentors large dark">Each Best In Class intern team is assigned a day-to-day mentor as well as a program manager. Guidance across the project is supported by our leadership team to ensure a successful program.</p>}
      </div>
      <div className="interns">
        { setBios(props) }
      </div>
    </div>
  </section>

)); 


export default quotes;
