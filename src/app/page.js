"use client";

import React, { useState, useEffect, useRef } from 'react';
import Banner from "./components/Banner";
import Header from "./components/MenuBar/Header";
import Projects from "./components/Project";
import About from './components/About';
import Contact from './components/Contact';
import "animate.css/animate.compat.css";
import SideBar from './components/SideBar';
import Loading from './components/Loading';
import ThemeProvider from './components/context/ThemeProvider';


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  if (loading) {
    return <Loading />;
  }
  return (
 
    <ThemeProvider>
    <Header scrollToSection={scrollToSection}></Header>
     <Banner id="banner"></Banner>
     <About id="about"></About>
     <Projects id="projects"></Projects>
     <Contact id="contact"></Contact>
    <SideBar />
   </ThemeProvider>
  );
}
