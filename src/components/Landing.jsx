import React from "react";

function Landing() {
  return (
    <div className="w-full bg-black border-t-[5px] border-t-gray-600 ">
      <div className="mt-10 sm:mt-20 mx-auto p-10  lg:px-[150px] flex flex-col  justify-between items-center sm:flex-row  gap-15 text-white">
        
        <div className="flex flex-col gap-5 ">
          <h1 className="text-3xl font-extrabold">Enjoy on your TV</h1>
          <p>
            Watch on smart Tvs,PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="">
          <img src="tv-bg.jpg" alt="" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
