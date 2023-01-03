import Image from "next/image";
import Link from "next/link";

const SupportOptions = (props: any) => {
    return (
      <Link href='#' className="bg-white w-[282px] p-[10px] rounded-[32px] hover-shadow hover:-translate-y-2 duration-300">
        <Image src={props.img} width={262} height={131} alt='images' className="mb-10" />
        <p className="font-bold text-lg text-mainColor text-center mb-10">{props.title}</p>
        <p className="text-[13px] text-mainColor text-center">{props.text}</p>
      </Link>
    );
  };

export default SupportOptions