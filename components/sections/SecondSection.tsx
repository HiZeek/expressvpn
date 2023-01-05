import Image from "next/image";
import Link from "next/link";
import { secondSectionItems } from "../../constants/SectionsItem";
import Container from "../ui/Container";

const SecondSection = () => {
  const secondList = secondSectionItems.map((item) => (
    <div
      key={item.id}
      className="w-full md:w-[370px] h-[504px] bg-white rounded-[32px] shadow p-7"
    >
      <h4 className="text-center text-2xl text-mainColor font-bold mb-5">
        {item.step}
      </h4>
      <div className="flex flex-col items-center">
        <Image
          src={item.img}
          alt="images"
          width={310}
          height={217.86}
          className="mb-5"
        />
      </div>
      <h5 className="text-center text-mainColor text-lg font-bold mb-5">
        {item.title}
      </h5>
      <p className="text-center text-mainColor text-normal">{item.text}</p>
    </div>
  ));
  return (
    <section className="bg-lightGreenColor">
      <Container className="py-20 px-5">
        <h2 className="text-center text-4xl md:text-5xl mb-10">
          How do I get and use a VPN?
        </h2>
        <div className="grid space-y-5 md:space-y-0 md:flex md:space-x-5 justify-between items-center max-w-[1200px] m-auto">
          {secondList}
        </div>
        <div className="flex flex-col items-center mt-10">
          <Link
            className=" w-[230px] flex items-center bg-greenColor hover:bg-yellowColor rounded-full text-white hover:text-mainColor duration-300 py-4 px-9 text-xl font-semibold"
            href="#"
          >
            Get ExpressVPN
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SecondSection;
