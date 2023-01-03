import Link from "next/link";

const ThirdListOptions = (props: any) => {
    return (
      <Link href='#' className="flex space-x-5 text-mainColor rounded-[32px] shadow-none p-5 hover:hover-shadow duration-300">
        {props.icon}
        <div>
          <p className="text-2xl font-bold mb-5">{props.title}</p>
          <p className="text-base w-[455px]">{props.text}</p>
        </div>
      </Link>
    );
  };

export default ThirdListOptions