import Container from "../ui/Container";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-footerText">
      <div className="bg-mainColor">
        <Container className="pt-20 pb-5 px-5">
          <div className="grid space-y-5 md:space-y-0 md:flex md:justify-between max-w-[1200px] m-auto">
            <div>
              <h3 className="text-lg mb-5 font-medium">Products</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-5 font-medium">Products</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-5 font-medium">Products</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-5 font-medium">Products</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
                <li>
                  <Link href="#">List Item</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-footerBottom">
        <Container className='p-5'>
          <div className="grid justify-center md:flex md:justify-between md:items-center max-w-[1200px] m-auto">
            <p className="text-xs mb-5">© 2022 ExpressVPN. All rights reserved.</p>
            <div className="flex justify-center space-x-5">
              <Link href="#">
                <YouTubeIcon />
              </Link>
              <Link href="#">
                <LinkedInIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
