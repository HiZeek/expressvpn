import Link from "next/link";

const ThirdListOptions = (props: any) => {
    return (
      <Link href='#' className="group w-full flex space-x-5 text-mainColor rounded-[32px] shadow-none p-5 hover:hover-shadow duration-300">
        {props.icon}
        <div className="w-full md:w-[355px]">
          <p className="w-full md:w-[240px] lg:w-[455px] text-2xl font-bold mb-5">{props.title}</p>
          <p className="w-full text-base md:w-[240px] lg:w-[455px]">{props.text}</p>
        </div>
      </Link>
    );
  };

export default ThirdListOptions