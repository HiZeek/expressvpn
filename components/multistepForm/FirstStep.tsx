const FirstStep = () => {
  return (
    <div>
      <div className="mb-10 text-center">
        <p className="font-semibold mb-5 text-base">1/3</p>
        <h2 className="text-4xl md:text-5xl text-mainColor mb-5">
          Get Started
        </h2>
        <p>Kindly fill form below</p>
      </div>
      <div className="flex flex-col mb-5 w-[270px] min-[375px]:w-[300px] min-[425px]:w-[350px] md:w-[500px]">
        <label htmlFor="full-name" className="text-sm md:text-xl mb-3">
          Full Name
        </label>
        <input
          id="full-name"
          name="full-name"
          type="text"
          placeholder="Enter full name"
          className="w-full h-14 border-2 border-mainColor p-5 rounded-[10px] outline-none"
        />
      </div>
      <div className="flex flex-col mb-10 w-[270px] min-[375px]:w-[300px] min-[425px]:w-[350px] md:w-[500px]">
        <label htmlFor="email" className="text-sm md:text-xl mb-3">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full h-14 border-2 border-mainColor p-5 rounded-[10px] outline-none"
        />
      </div>
    </div>
  );
};

export default FirstStep;
