import React from "react";

function Banner() {
  return (
    <section className="w-[100%] relative text-white h-[100vh] bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="w-[100%] h-[100vh] absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
      <header className="max-w-[1170px] mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-[1fr_auto] p-[2px] items-center">
          <figure>
            <img src="netflix.webp" alt="" className=" h-23 " />
          </figure>
          <div className="flex py-[10px] gap-5 justify-end pr-5">
            <div className="relative  ">
              <img
                src="/globe.png"
                alt="Globe Icon"
                className="w-6 h-6 text-white absolute top-[5px] left-3 inline-block filter invert brightness-200"
              />

              <select
                name=""
                id=""
                defaultValue="en"
                className="border border-[#3c3f3f] rounded p-[5px] pl-[35px] text-center w-[130px] text-white bg-[rgba(25,24,24,0.5)]  "
              >
                <option value="en" className="text-black bg-white">
                  English
                </option>
                <option value="hi" className="text-black bg-white">
                  Hindi
                </option>
                <option value="zh" className="text-black bg-white">
                  Chinese
                </option>
                <option value="ja" className="text-black bg-white">
                  Japanese
                </option>
              </select>
            </div>
            <button className="relative bg-red-600 w-[60px]  sm:w-[80px]  rounded-md text-white font-bold">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <div className="w-full flex flex-col relative gap-5 mt-10 px-3 ">
        <div className="">
          <h1 className="text-3xl font-extrabold">
            Unlimited movies, Tv shows and more
          </h1>
        </div>
        <div>
          <p className="font-bold">Watch anywhere. Cancel anytime</p>
        </div>
        <div>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
         <div className="relative max-w-[700px] mx-auto">
       <form action="" className="grid  sm:grid-cols-[70%_auto] grid-col-1 gap-3 ">
         <input type="text" placeholder="Enter your gmail" className="bg-gray-700 border-1 border-gray-600 rounded p-4 sm:h-12" />
       
        <button className="bg-red-500  font-bold  justify-center p-3 sm:p-3 sm:h-12 sm:w-36 flex items-center rounded">Get Started <img src="right-arrow.svg" className="h-8 pl-2 filter invert brightness-200"></img></button>
       </form>
      </div>
      </div>
    

     
    </section>
  );
}

export default Banner;
