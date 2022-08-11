import React from "react";

function About() {
  return (
    <>
      <section className="hero min-h-screen bg-black text-white" id="#about">
        <div className="hero-content align-items-center flex-col lg:flex-row-reverse ">
          <img src="imgs/me.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold ">Hello, I'm <span className="purple ">Safa Ali</span></h1>
            <p className="py-6 ">A MEARN Stack developer</p>
            <a className="btn bg-violet-700 hover:bg-violet-800" href="#projects">See Projects</a>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
