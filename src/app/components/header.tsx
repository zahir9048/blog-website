import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  return (
    <>
      <header className="bg-[#00000045] fixed top-0 left-0 w-full">
        <div className="max-w-[1300px] h-[80px] mx-auto px-[50px] flex justify-between items-center text-white">
          <div>
            <a href="/">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="logo"
              ></Image>
            </a>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex gap-[15px] border-r border-white-300 pr-5">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Articles</Link>
              <Link href="/">Contact Us</Link>
            </div>
            <div className="flex gap-[15px] border-r border-white-300 pr-5">
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="">
                <i className="bi bi-behance"></i>
              </a>
            </div>
            <div>
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
