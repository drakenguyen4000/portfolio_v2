import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [allData, setAllData] = useState({
    resume: [],
  });

  useEffect(() => {
    axios
      .get(`./myResume.json`)
      .then((res) => setAllData({ resume: res.data }))
      .catch((err) => console.log(err));
  }, []);

  const { main, skills, projects } = allData.resume;

  return (
    <BrowserRouter>
      <Header data={main} />
      <About data={main} />
      <Skills data={skills} />
      <Projects data={projects} />
      <Contact data={main} />
      <Footer data={main} />
    </BrowserRouter>
  );
};

export default App;
