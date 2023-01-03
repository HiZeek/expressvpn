import Container from "./Container";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import Link from "next/link";

const ThirdSection = () => {
  const ThirdListOptions = (props: any) => {
    return (
      <Link href='#' className="flex space-x-5 text-mainColor rounded-[32px] shadow-none p-5 hover:shadow-boxShadowColor">
        {props.icon}
        <div>
          <p className="text-2xl font-bold mb-5">{props.title}</p>
          <p className="text-base w-[455px]">{props.text}</p>
        </div>
      </Link>
    );
  };

  return (
    <section className="bg-white py-20">
      <Container className="px-5">
        <h2 className="text-center text-5xl text-mainColor mb-20">Why ExpressVPN?</h2>
        <div className="grid grid-cols-2 max-w-[1200px] space-x-5 space-y-5 m-auto justify-center">
          <ThirdListOptions icon={<LocationOnOutlinedIcon className="w-[35px] h-[35px]" />} title='Locations in 94 countries' text='Choose from VPN server locations in 94 countries all over the world.' />
          <ThirdListOptions icon={<LockOutlinedIcon className="w-[35px] h-[35px]" />} title='Best-in-class encryption' text='Your data is protected by AES-256, the standard trusted by security experts.' />
          <ThirdListOptions icon={<ChatBubbleOutlineOutlinedIcon className="w-[35px] h-[35px]" />} title='24-hour live chat support' text='We&apos;re available anytime to help you with setup and troubleshooting.' />
          <ThirdListOptions icon={<AddModeratorOutlinedIcon className="w-[35px] h-[35px]" />} title='TrustedServer technology' text='With our innovative server technology, no data is ever written to a hard drive.' />
          <ThirdListOptions icon={<SpeedOutlinedIcon className="w-[35px] h-[35px]" />} title='Lightning-fast speeds' text='Enjoy smoother, throttle-free browsing and gaming with ultra-fast speeds.' />
          <ThirdListOptions icon={<DevicesOutlinedIcon className="w-[35px] h-[35px]" />} title='Use on 5 devices simultaneously' text='Install ExpressVPN on all your devices, and connect five at once.' />
        </div>
      </Container>
    </section>
  );
};

export default ThirdSection;
