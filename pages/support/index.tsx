import Container from "../../components/ui/Container";
import Header from "../../components/layout/Header";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SupportOptions from "./SupportOptions";
import Articles from "./Articles";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ModalOutput from "../../components/multistepForm/ModalOutput";
import { useState } from "react";

const Index = (props: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Header onConfirm={handleOpenModal} />
      <ModalOutput show={openModal} onClose={handleCloseModal} />
      <section>
        <div className="support-banner">
          <Container className="py-20 px-5">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-center text-[42px] md:text-6xl mb-[30px] font-medium">
                ExpressVPN Support
              </h1>
              <div className="w-[300px] min-[425px]:w-[380px] md:w-[570px] h-[60px] bg-white flex items-center px-3 rounded-lg">
                <input
                  type="text"
                  placeholder="Search the ExpressVPN Support Center"
                  className="w-full mr-2 outline-none"
                />
                <SearchOutlinedIcon className="w-10 h-10 cursor-pointer" />
              </div>
            </div>
          </Container>
        </div>
        <Container className="pt-20 pb-10 px-5">
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-y-10  min-[1200px]:grid-cols-4 max-w-[1200px] m-auto">
            <SupportOptions
              img="/assets/setup-expressvpn.svg"
              title="Setting up ExpressVPN"
              text="Instructions for setting up and using our products on desktop, mobile, and other devices"
            />
            <SupportOptions
              img="/assets/troubleshooting-issues.svg"
              title="Setting up ExpressVPN"
              text="Instructions for setting up and using our products on desktop, mobile, and other devices"
            />
            <SupportOptions
              img="/assets/manage-account.svg"
              title="Setting up ExpressVPN"
              text="Instructions for setting up and using our products on desktop, mobile, and other devices"
            />
            <SupportOptions
              img="/assets/knowledgehub.svg"
              title="Setting up ExpressVPN"
              text="Instructions for setting up and using our products on desktop, mobile, and other devices"
            />
          </div>
        </Container>
        <Container className="pt-5 pb-20 px-5">
          <h2 className="text-4xl md:text-5xl text-center">Popular articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 pt-20 pb-10">
            <Articles title="Find your ExpressVPN activation code" />
            <Articles title="Windows 7 and above (app setup)" />
            <Articles title="Frequently Asked Questions" />
            <Articles title="What's new in ExpressVPN's latest app versions?" />
            <Articles title="Cancel your ExpressVPN subscription" />
            <Articles title="Amazon Fire TV and Fire Stick (app setup)" />
            <Articles title="How many devices can I connect simultaneously?" />
            <Articles title="Disable proxy settings in Google Chrome" />
            <Articles title="Update the ExpressVPN app" />
            <Articles title="Renew your ExpressVPN account" />
          </div>
          <div className="pt-10 flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-x-10">
            <Image
              src="/assets/support.svg"
              width={542}
              height={489.14}
              alt="images"
            />
            <div>
              <h2 className="text-5xl text-mainColor mb-5">
                Get 24/7 live support
              </h2>
              <p className="text-mainColor text-base">
                Can???t find what you are looking for? Ask your questions via live
                chat and get dedicated help.
              </p>
              <div className="grid md:flex mt-10 mb-5 gap-x-5">
                <Link
                  className="text-center bg-greenColor hover:bg-yellowColor rounded-full text-white hover:text-mainColor duration-300 py-4 px-9 text-xl font-semibold mb-5"
                  href="#"
                >
                  Chat with us
                </Link>
                <Link
                  className="text-center text-greenColor border-2 border-greenColor hover:bg-yellowColor hover:border-yellowColor rounded-full hover:text-mainColor duration-300 py-4 px-9 text-xl font-semibold mb-5"
                  href="#"
                >
                  Email us
                </Link>
              </div>
              <p className="mb-10 lg:mb-0 text-mainColor text-base">
                ExpressVPN???s top-rated agents are here to help.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Index;
