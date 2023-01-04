import Container from "./Container";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import ThirdListOptions from "./ThirdListOptions";

const ThirdSection = () => {
  return (
    <section className="bg-white py-20">
      <Container className="px-5">
        <h2 className="text-center text-4xl md:text-5xl text-mainColor mb-20">Why ExpressVPN?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-5 max-w-[1200px] m-auto justify-center">
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
