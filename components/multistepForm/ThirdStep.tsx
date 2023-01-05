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
      <div className="flex flex-col mb-5 w-[500px]">
        <label htmlFor="message" className="text-xl mb-3">
          Messsage
        </label>
        <textarea name="message" placeholder="Enter your message" id="message" cols={30} rows={10} className="w-full h-[200px] border-2 border-mainColor p-5 rounded-[10px] outline-none resize-none" />
      </div>
      {/* <div className="flex justify-between items-center">
        <button
          type="button"
          className="bg-greenColor text-white px-8 py-4 rounded-[10px] hover:bg-yellowColor hover:text-mainColor duration-300 font-semibold text-xl"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-greenColor text-white px-8 py-4 rounded-[10px] hover:bg-yellowColor hover:text-mainColor duration-300 font-semibold text-xl"
        >
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default ThirdStep;
