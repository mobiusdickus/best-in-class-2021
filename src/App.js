import React, { useRef, useEffect, useState } from "react";

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Divider from './components/Divider/Divider';
import Quotes from './components/Quotes/Quotes';
import Projects from './components/Projects/Projects';
import Apply from './components/Apply/Apply';
import Footer from './components/Footer/Footer';

import useSectionRef from './hooks/useSectionRef';

import './App.css';


const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

function App() {
  const qClasses = {
    "section": "hear-from-the-best padding-large",
    "containerInterns": "hear-from-the-best-container",
    "containerMentors": "mentors-container"
  };

  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const internsRef = useRef(null);
  const projectsRef = useRef(null);
  const mentorsRef = useRef(null);
  const applyRef = useRef(null);

  const sectionRefs = [
    { section: "About", ref: aboutRef },
    { section: "Interns", ref: internsRef },
    { section: "Projects", ref: projectsRef },
    { section: "Mentors", ref: mentorsRef },
    { section: "Apply", ref: applyRef },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        } else {
          return null;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  let navStyle = {
    color: "white"
  };

  if (visibleSection === "About" ||
      visibleSection === "Interns" ||
      visibleSection === "Mentors") {
    navStyle.color = "black"
  };

  return (
    <>
      <Header ref={ headerRef }/>
      <Nav section={ visibleSection } style={ navStyle }/>
      <Intro/>
      <About ref={ aboutRef }/>
      <Divider name="divider-01"/>
      <Quotes
        ref={ internsRef }
        id="past-interns"
        classes={ qClasses }
        title="Hear From The Best"
        isIntern={ true }/>
      <Divider name="divider-02"/>
      <Projects ref={ projectsRef }/>
      <Divider name="divider-03"/>
      <Quotes
        ref={ mentorsRef }
        id="mentors"
        classes={ qClasses }
        title="Meet The Mentors"
        isIntern={ false }/>
      <Apply ref={ applyRef }/>
      <Footer/>
    </>
  );
}

export default App;
