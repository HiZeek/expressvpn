import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { firstSectionItems } from "../../constants/SectionsItem";
// import { client, urlFor } from "../sanity";
// import { Post } from "../typings";
// interface Props {
//   posts: [Post];
// }

// export const getServerSideProps = async () => {
//   const query = `*[_type == 'post'] {
//     _id,
//       title,
//       slug,
//       description,
//       mainImage,
//   }`;

//   const posts = await client.fetch(query);
//   return {
//     props: {
//       posts,
//     },
//   };
// };

const FirstSection = () => {
  // console.log(posts);
  
  const firstList = firstSectionItems.map((item) => (
    <div key={item.id} className="flex flex-col items-center">
      <Image
        src={item.img}
        alt="images"
        width={340}
        height={173.3}
        className="mb-5"
      />
      <h3 className="text-3xl text-mainColor text-center font-medium mb-5">
        {item.title}
      </h3>
      <p className="text-center text-base text-mainColor">{item.text}</p>
    </div>
  ));
  return (
    <section>
      <Container className="px-5 py-20">
        <div className="grid md:flex justify-between items-center py-10 max-w-[960px] m-auto">
          <Image
            src="/assets/brickwall.avif"
            alt="brickwall"
            width={289.98}
            height={289.98}
            className='w-[250px] min-[425px]:w-[350px] min-[550px]:w-[300px]'
          />
          <div className="text-mainColor w-[250px] min-[425px]:w-[350px] min-[550px]:w-[400px]">
            <h2 className="text-4xl md:text-5xl font-medium mb-5">
              Secure access, worldwide
            </h2>
            <p className="text-base mb-5">
              Connect reliably from anywhere, to anywhere. Our network of
              high-speed servers across 94 countries puts you in control.
            </p>
            <Link
              className=" w-[230px] flex items-center bg-greenColor hover:bg-yellowColor rounded-full text-white hover:text-mainColor duration-300 py-4 px-9 text-xl font-semibold"
              href="#"
            >
              Get ExpressVPN
            </Link>
          </div>
        </div>
        <div className="grid md:flex justify-between items-center py-10 max-w-[960px] m-auto">
          <div className="text-mainColor w-[250px] min-[425px]:w-[350px] min-[550px]:w-[400px]">
            <h2 className="text-4xl md:text-5xl font-medium mb-5">
              Just one click to a safer internet
            </h2>
            <p className="text-base mb-5">
              Going online doesn’t have to mean being exposed. Whether you’re
              shopping from your desk or just connecting at a cafe, keep your
              personal information more private and secure.
            </p>
          </div>
          <Image
            src="/assets/lamp.avif"
            alt="lamp"
            width={289.98}
            height={289.98}
            className='w-[250px] min-[425px]:w-[350px] min-[550px]:w-[300px]'
          />
        </div>
        <div className="grid md:flex justify-between items-center py-10 max-w-[960px] m-auto">
          <Image
            src="/assets/coverage.avif"
            alt="coverage"
            width={289.98}
            height={289.98}
            className='w-[250px] min-[425px]:w-[350px] min-[550px]:w-[300px]'
          />
          <div className="text-mainColor w-[250px] min-[425px]:w-[350px] min-[550px]:w-[400px]">
            <h2 className="text-4xl md:text-5xl font-medium mb-5">Use on any device</h2>
            <p className="text-base mb-5">
              Phone, tablet, computer, router—no matter where you are or what
              devices you’re using, a single ExpressVPN subscription has got you
              covered.
            </p>
            <Link
              className=" w-[230px] flex items-center bg-greenColor hover:bg-yellowColor rounded-full text-white hover:text-mainColor duration-300 py-4 px-9 text-xl font-semibold"
              href="#"
            >
              Get ExpressVPN
            </Link>
          </div>
        </div>
        <div>
          <div className="grid space-y-5 md:flex justify-between items-center pt-10 max-w-[1200px] m-auto space-x-5">
            {firstList}
          </div>
          <div className="flex flex-col items-center mt-20">
            <Link
              className="text-greenColor border-b-2 border-greenColor hover:border-yellowColor hover:text-mainColor duration-300"
              href="#"
            >
              See more advantages &gt;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FirstSection;


