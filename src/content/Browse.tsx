

const Browse: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center pb-10">
      
        <div className="bg-[#F0F0F0] p-6 md:p-15 rounded-xl md:rounded-3xl w-[90%] md:w-[80%] text-black">
          <h1 className="font-pop font-extrabold text-[33px] lg:text-5xl capitalize text-center pb-13">
            Browse by dress Style
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5 h-[270px] md:h-[200px] lg:h-[270px]   pb-5">
            <div
              className=" w-full bg-[url('/images/casual.png')] bg-cover bg-no-repeat bg-center rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer
              "
            >
              <p className="pt-7 pl-9 font-pop font-bold text-2xl">Casual</p>
            </div>
            <div
              className=" w-full bg-[url('/images/Formal.png')] bg-cover bg-no-repeat bg-l rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer
              "
            >
              <p className="pt-7 pl-9 font-pop font-bold text-2xl">Formal</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 h-[270px] md:h-[200px] lg:h-[270px] ">
            <div
              className=" w-full bg-[url('/images/parties.png')] bg-cover bg-no-repeat bg-center rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer
              "
            >
              <p className="pt-7 pl-9 font-pop font-bold text-2xl">Party</p>
            </div>
            <div
              className=" w-full bg-[url('/images/gym.png')] bg-cover bg-no-repeat bg-center rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer
              "
            >
              <p className="pt-7 pl-9 font-pop font-bold text-2xl">Gym</p>
            </div>
          </div>
        </div>
    </div>

  );
};

export default Browse;
