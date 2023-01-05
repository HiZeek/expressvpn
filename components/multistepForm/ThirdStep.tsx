import React from "react";

const ThirdStep = () => {
  return (
    <div>
      <div className="mb-10 text-center">
        <p className="font-semibold mb-5 text-base">3/3</p>
        <h2 className="text-4xl md:text-5xl text-mainColor mb-5">
          Just one more
        </h2>
        <p>Kindly fill form below</p>
      </div>
      <div className="flex flex-col mb-5 w-[270px] min-[375px]:w-[300px] min-[425px]:w-[350px] md:w-[500px]">
        <label htmlFor="message" className="text-xl mb-3">
          Messsage
        </label>
        <textarea name="message" placeholder="Enter your message" id="message" cols={30} rows={10} className="w-full h-[200px] border-2 border-mainColor p-5 rounded-[10px] outline-none resize-none" />
      </div>
    </div>
  );
};

export default ThirdStep;
