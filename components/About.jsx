import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen p-2 items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have 3 years of experience in full stack web developmemt. I mostly
            work with javascript and web apps.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Checkout some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-100">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
