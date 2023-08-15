import Link from "next/link";

const TopBar = () => {
  return (
    <div className="topBar text-[#A1A1A1] md:text-3xl text-1xl md:px-12 px-4 pt-6 md:pb-20 pb-10">
      <span>Grab Your </span>
      <Link href="#" className="text-[#6b57d4]">
        Tickets
      </Link>
      <span> Now</span>
    </div>
  );
};

export default TopBar;
