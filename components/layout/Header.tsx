import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Header = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false)

  const handleActiveMenu = () => {
    setActiveMenu(prevActiveMenu => !prevActiveMenu)
  }

  const showDisplayMenu = () => {
    setShowMenu(true);
  };

  const hideDisplayMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <Container className="flex justify-between items-center px-5 h-20">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="Logo" width={204} height={40} />
        </Link>
        <div className="hidden md:block">
          <ul className="relative flex items-center h-20 gap-10">
            <li className="text-mainColor hover:text-greenColor duration-300 group flex items-center h-full">
              <Link href="#">
                <p className="text-sm flex items-center">
                  What we Offer{" "}
                  <KeyboardArrowDownIcon className="ml-1 group-hover:rotate-180 duration-300" />
                </p>
              </Link>
              <div className="hidden group-hover:block hover:block">
                <div className="bg-white text-mainColor absolute w-[500px] top-20 z-10 left-0 p-10 flex justify-between shadow rounded-[10px]">
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
              </div>
            </li>
            <li className="text-mainColor hover:text-greenColor duration-300 flex items-center h-full">
              <Link href="/support">
                <p className="text-sm flex items-center">Support</p>
              </Link>
            </li>
            <li className="flex items-center h-full">
              <Link
                onClick={props.onConfirm}
                className="text-greenColor border-2 border-greenColor hover:bg-yellowColor hover:border-yellowColor rounded-full hover:text-mainColor duration-300 py-2 px-9 text-xl font-semibold"
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
              <CloseOutlinedIcon
                className="w-10 h-10"
                onClick={hideDisplayMenu}
              />
            </div>
            <ul className="grid space-y-10 mt-5">
              <li onClick={handleActiveMenu} className={`${activeMenu ? 'text-greenColor' : 'text-mainColor hover:text-greenColor duration-300'}`}>
                <Link href="#">
                  <p className="text-sm flex items-center">
                    What we Offer{" "}
                    <KeyboardArrowDownIcon className={`${activeMenu ? 'ml-1 rotate-180 duration-300' : 'ml-1'}`} />
                  </p>
                </Link>
                <div className={`${activeMenu ? 'block' : 'hidden'}`}>
                  <div className="bg-white p-10 shadow rounded-[10px] text-mainColor">
                    <div className="mb-5">
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
                    <div className="mb-5">
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
                </div>
              </li>
              <li className="text-mainColor hover:text-greenColor duration-300">
                <Link href="/support">
                  <p className="text-sm flex items-center">Support</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    props.onConfirm();
                    hideDisplayMenu();
                  }}
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
