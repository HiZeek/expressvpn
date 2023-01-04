import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Header = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const showDisplayMenu = () => {
    setShowMenu(true);
  };

  const hideDisplayMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <Container className="flex justify-between items-center p-5">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="Logo" width={204} height={40} />
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li>
              <Link href="#">
                <p className="text-sm flex items-center">
                  What we Offer <KeyboardArrowDownIcon className="ml-1" />
                </p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p className="text-sm flex items-center">Support</p>
              </Link>
            </li>
            <li>
              <Link
                onClick={props.onConfirm}
                className="text-greenColor border-2 border-greenColor hover:bg-yellowColor hover:border-yellowColor rounded-full hover:text-mainColor duration-300 py-2 px-9 text-xl font-semibold mb-5"
                href="#"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <MenuOutlinedIcon
            className="w-10 h-10 cursor-pointer"
            onClick={showDisplayMenu}
          />
          <div
            className={`${
              showMenu
                ? "bg-white fixed top-0 left-0 p-5 z-20 w-full h-screen translate-x-0 duration-500"
                : "grid bg-white fixed top-0 left-0 p-5 z-20 w-full h-screen -translate-x-[185%] duration-500"
            }`}
          >
            <div className="cursor-pointer flex flex-col items-end">
              <CloseOutlinedIcon className="w-10 h-10" onClick={hideDisplayMenu} />
            </div>
            <ul className="grid space-y-10 mt-5">
              <li>
                <Link href="#">
                  <p className="text-sm flex items-center">
                    What we Offer <KeyboardArrowDownIcon className="ml-1" />
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <p className="text-sm flex items-center">Support</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {props.onConfirm(); hideDisplayMenu();}}
                  className="text-center text-greenColor border-2 border-greenColor hover:bg-yellowColor hover:border-yellowColor rounded-full hover:text-mainColor duration-300 py-2 px-9 text-xl font-semibold mb-5 w-[252px]"
                  href="#"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
