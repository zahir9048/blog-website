export default async function Header() {
  return (
    <>
      <footer className="bg-[#2a2929] w-full text-white">
        <div className="max-w-[1300px] h-[80px] mx-auto px-[20px] sm:px-[50px] h-[80px] flex flex-col justify-center gap-[10px] sm:gap-[0px] sm:flex-row sm:justify-between items-center">
          <div className="text-center sm:text-start">Developed By Engr. Zahir Khan.</div>
          <div className="flex gap-[15px]">
            <a target="_blank" href="https://www.linkedin.com/in/zahirkhan121/">
              <i className="bi bi-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/zahir9048/">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
