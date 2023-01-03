import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Header = () => {
  return (
    <header>
      <Container className="flex justify-between items-center p-5">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="Logo" width={204} height={40} />
        </Link>
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link href="#">
                <p className="text-sm flex items-center">
                  What we Offer <KeyboardArrowDownIcon className="ml-1" />
                </p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p className="text-sm flex items-center">
                  Support
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
