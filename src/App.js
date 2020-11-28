import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
      <div id="container">
        <Navbar />
        <Header data={main} />
        <About data={main} />
        <Skills data={skills} />
        <Projects data={projects} />
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
