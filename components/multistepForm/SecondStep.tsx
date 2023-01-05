import React from "react";

const SecondStep = () => {
  return (
    <div>
      <div className="mb-10 text-center">
        <p className="font-semibold mb-5 text-base">2/3</p>
        <h2 className="text-4xl md:text-5xl text-mainColor mb-5">
          Almost There
        </h2>
        <p>Kindly fill form below</p>
      </div>
      <div className="flex flex-col mb-5 w-[500px]">
        <label htmlFor="subject" className="text-xl mb-3">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Enter subject"
          className="w-full h-14 border-2 border-mainColor p-5 rounded-[10px] outline-none"
        />
      </div>
      <div className="flex flex-col mb-10 w-[500px]">
        <label htmlFor="phone" className="text-xl mb-3">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full h-14 border-2 border-mainColor p-5 rounded-[10px] outline-none"
        />
      </div>
      {/* <div className="flex justify-between items-center">
        <button
          type="button"
          className="bg-greenColor text-white px-8 py-4 rounded-[10px] hover:bg-yellowColor hover:text-mainColor duration-300 font-semibold text-xl"
        >
          Back
        </button>
        <button
          type="button"
          className="bg-greenColor text-white px-8 py-4 rounded-[10px] hover:bg-yellowColor hover:text-mainColor duration-300 font-semibold text-xl"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default SecondStep;
