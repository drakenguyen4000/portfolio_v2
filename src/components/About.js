import React from "react";

const About =(props)=>{
    if(props.data){
        var sentence1 = props.data.bio.sentence1;
        var sentence2 = props.data.bio.sentence2;
        var sentence3 = props.data.bio.sentence3;
        var sentence4 = props.data.bio.sentence4;
    }

    return (
        <section id="About">
            <div><h1>About Me</h1></div>
            <div>{sentence1}</div>
            <div>{sentence2}</div>
            <div>{sentence3}</div>
            <div>{sentence4}</div>
        </section>
    )
}

export default About;