import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SquigglyLines from "@/components/SquigglyLines";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" background-gradient">
      <Header />
      <a
        href="https://vercel.com/templates/next.js/spirals"
        className="block border-[1px] border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-md px-4 py-2 text-gray-400 text-sm mt-20 w-fit mx-auto"
      >
        Clone and deploy your own with{" "}
        <span className="text-blue-600">Vercel</span>
      </a>
      <h1 className="text-7xl font-bold text-center mt-6 text-gray-300 mx-20 ">
        Generating dream rooms{" "}
        <span className="relative">
          <span className="text-blue-600">using AI</span>
          <SquigglyLines />
        </span>{" "}
        for everyone.
      </h1>
      <h4 className="text-gray-400 text-lg text-center mx-72 mt-12">
        Take a picture of your room and see how your room looks in different
        themes. 100% free – remodel your room today.
      </h4>
      <Link
        href={"/dream"}
        className="block w-fit mx-auto bg-blue-600 px-4 py-3 rounded-xl hover:bg-blue-500 transition-colors duration-200 font-medium mt-10"
      >
        Generate your dream room
      </Link>
      <div className="flex mt-14 gap-7 justify-center mb-24">
        <div className="flex flex-col items-center relative">
          <h2 className="font-medium text-lg mb-1">Original Room</h2>
          <Image
            src={"/original-pic.jpg"}
            width={500}
            height={400}
            alt="the original image"
            className="rounded-xl object-cover w-full h-96 shadow-sm hover:shadow-2xl "
          />
        </div>
        <div className="flex flex-col items-center relative w-fit">
          <h2 className="font-medium text-lg mb-1 ">Generated Room</h2>
          <Image
            src={"/generated-pic.png"}
            width={500}
            height={400}
            alt="the original image"
            className="rounded-xl object-cover h-96 w-full shadow-2xl"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
