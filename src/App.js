import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

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

  const main = allData.resume.main;
  const skills = allData.resume.skills;

  return (
    <div id="container">
      <Navbar/>
      <Header data={main}/>
      <About data={main} />
      <Skills data={skills} />
      {/* <Project /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
