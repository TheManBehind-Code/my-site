import profileImage from "../assets/profile.jpg";
import HeroBlock from "./Hero";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1 gap-4 pb-8">
        <div className="hidden md:flex w-full md:w-[30%] border-2 border-green-200">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full h-full transition-all duration-300 ease-in-out hover:shadow-2xl">
            <img
              src={profileImage}
              alt="Foto di Lorenzo Franceschini in palestra"
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full md:w-[70%] flex flex-1 border-2 border-red-200">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-4 ">
            <HeroBlock />
            <div className="bg-white p-6 rounded-xl flex items-center justify-center text-xl hover:shadow-lg hover:scale-105 transition-transform duration-200">
              Block 2
            </div>
            <div className="bg-white p-6 rounded-xl flex items-center justify-center text-xl hover:shadow-lg hover:scale-105 transition-transform duration-200">
              Block 3
            </div>
            <div className="bg-white p-6 rounded-xl flex items-center justify-center text-xl hover:shadow-lg hover:scale-105 transition-transform duration-200">
              Block 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
