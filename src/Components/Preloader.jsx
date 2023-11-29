import { BounceLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-w-full bg-white fixed top-0 left-0 z-50 space-y-12">
      <BounceLoader
        className="flex"
        color="#FF001E"
        loading={true}
        size={100}
      />
      <p className="flex mt-[20px] text-xl italic font-normal">Loading...</p>
    </div>
  );
};

export default Preloader;
