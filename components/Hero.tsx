import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Header from "./Header";
import EastIcon from "@mui/icons-material/East";

const Hero = () => {
  return (
    <section className="hero-bg">
      <Header />
      <Container className="flex flex-col items-center pt-10 px-5">
        <h1 className="text-8xl text-mainColor mb-5 font-medium">
          The VPN that just works
        </h1>
        <p className="text-2xl text-mainColor font-bold mb-5">
          Go further with the #1 trusted leader in VPN
        </p>
        <Link
          className="flex items-center bg-greenColor hover:bg-yellowColor rounded-full text-white hover:text-mainColor duration-500 py-4 px-9 text-xl font-semibold mb-5"
          href="#"
        >
          Get ExpressVPN <EastIcon className="ml-1" />
        </Link>
        <p className="text-[10px]">30-DAY MONEY-BACK GUARANTEE</p>
        <Image
          src="/assets/hero-img.avif"
          alt="people"
          width={572}
          height={259.77}
          className="absolute bottom-0"
        />
      </Container>
    </section>
  );
};

export default Hero;
