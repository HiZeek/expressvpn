import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const goBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setStep(step + 1);
  };

  const multistepForm = () => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return <FirstStep />;
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div>{multistepForm()}</div>
        <div className="flex justify-between items-center">
          {step > 1 && (
            <button
              onClick={goBack}
              type="button"
              className="bg-greenColor text-white px-8 py-4 rounded-[10px] hover:bg-yellowColor hover:text-mainColor duration-300 font-semibold text-xl"
            >
              Back
            </button>
          )}
          <button
            onClick={handleSubmit}
            type="button"
            className="bg-greenColor text-white px-8 py-4 rounded-[10px] hover:bg-yellowColor hover:text-mainColor duration-300 font-semibold text-xl"
          >
            {step === 1 || step === 2 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
