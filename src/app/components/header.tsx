import Link from "next/link";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function Header() {
  return (
    <>
      <header className="bg-[#2a2929] z-10 fixed top-0 left-0 w-full">
        <div className="max-w-[1300px] h-[80px] mx-auto px-[20px] sm:px-[50px] flex justify-between items-center text-white">
          <div>
            <a href="/">
              <h2
                className={`${league_spartan.className} font-bold text-[28px]`}
              >
                RUNO
              </h2>
            </a>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex gap-[15px] border-r border-white-300 pr-5">
              <Link href="/#all-blogs">All Blogs</Link>
            </div>
            <div className="flex gap-[15px] border-r border-white-300 pr-5">
              <a target="_blank" href="https://github.com/zahir9048">
                <i className="bi bi-github"></i>
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
