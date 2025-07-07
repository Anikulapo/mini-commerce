import Image from "next/image";

const Shop: React.FC = () => {
  return (
    <>
      <div className="pt-20 md:pt-10 bg-[#F2F0F1] w-full">
        <section className=" relative pt-[8%] xl:pt-[10%]   md:bg-[url('/images/model.png')] bg-cover bg-no-repeat text-black  grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="px-[5%] md:pr-0 md:pl-[10%]">
            <h1
              className="font-pop 
                            font-extrabold
                            text-4xl
                            lg:text-5xl
                            xl:text-6xl md:font-[750] text-left
                             md:text-4xl"
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p
              className="font-al text-[rgba(0,0,0,.6)] 
            lg:mt-4 text-left md:text-[12px] lg:text-[16px] xl:text-[18px]
            pt-5
            md:pb-4 md:pt-3 xl:pb-8 xl:pt-6"
            >
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button

              className="text-white bg-black rounded-full hidden md:block
                                transition-all duration-300 ease-in-out
                                transform hover:scale-105
                                hover:cursor-pointer hover:shadow-md/50
                                 md:py-2 md:px-7 
                                 lg:py-3 lg:px-10
                                 xl:py-4 xl:px-15 "
            >
              Shop Now
            </button>

            <button
              className="text-white bg-black rounded-full md:hidden
                                transition-all duration-300 ease-in-out
                                transform hover:scale-105
                                 w-full py-2 px-10  my-5"
            >
              Shop Now
            </button>

            <ul className="flex flex-wrap 
            justify-center items-center
            gap-5
            md:justify-normal 
            pt-5
            md:pt-6 lg:pt-12 md:gap-3 lg:gap-8 md:pb-5">
              <li
                className="font-al 
                            pr-5
                            md:pr-2 
                            lg:pr-4
                            xl:pr-8 border-r border-[rgba(0,0,0,.1)]"
              >
                <h2
                  className="xl:text-4xl font-[750] text-left 
                                text-2xl
                                md:text-2xl font-pop"
                >
                  200+{" "}
                </h2>
                <p
                  className="text-[rgba(0,0,0,.6)] md:text-[9px] 
                                text-[10px]
                                xl:text-[18px] font-al "
                >
                  International Brands
                </p>
              </li>
              <li
                className="font-al 
                            px-5
                            md:pr-2
                            lg:pr-4
                            xl:pr-8 border-r border-[rgba(0,0,0,.1)]"
              >
                <h2
                  className=" lg:text-3xl
                  text-2xl
                                xl:text-4xl font-[750] text-left md:text-2xl font-pop"
                >
                  2,000+{" "}
                </h2>
                <p
                  className="text-[rgba(0,0,0,.6)] md:text-[9px] 
                            text-[10px]
                            xl:text-[18px] font-al"
                >
                  High-Quality Products
                </p>
              </li>
              <li className="font-al">
                <h2
                  className="xl:text-4xl font-[750] text-left 
                                text-2xl
                                md:text-2xl font-pop"
                >
                  30,000+{" "}
                </h2>
                <p
                  className="text-[rgba(0,0,0,.6)] md:text-[9px] 
                                text-[10px]
                                xl:text-[18px] font-al"
                >
                  Happy Customers
                </p>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center ">
            <Image
              className="absolute right-[5%] text-black
              w-[76px]
              top-0
              md:top-[-5%] md:right-[5%] 
              xl:top-[-5%] xl:right-[5%]
              md:w-[50px] lg:w-[104px]"
              src="/images/Vector.svg"
              alt="Black Star"
              width={104}
              height={104}
              priority
            />
            <Image
              className="absolute top-[50%] transformn translate-y-[-50%] lg:left-0 text-black 
              left-[5%]
              w-[44px]
              md:left-[15%]
              md:w-[28px] lg:w-[56px]"
              src="/images/Vector.svg"
              alt="Black Star"
              width={56}
              height={56}
              priority
            />

            <Image
              className=" text-black
              w-full
              md:hidden"
              src="/images/mobile Model.svg"
              alt="Black Star"
              width={390}
              height={300}
              priority
            />
            
          </div>
          
        </section>
        <div className=" bg-black px-[5%] py-11">
          <ul className="flex flex-wrap justify-center md:justify-between items-center gap-5">
            <li className="hover:cursor-pointer">
              <a 
              target="_blank"
              href="https://www.versace.com/ng/en/?gclsrc=aw.ds&gclid=Cj0KCQjwvajDBhCNARIsAEE29Wo059LxmBazC4Akw3WUg1ijs-B4o_x3mqW1EE1a-Fn1-nHclZeGvWUaAjzCEALw_wcB&gbraid=0AAAAADnzP0YRUP43eBsH8OmyP91DY9opO&gad_campaignid=6608619505&gad_source=1&s_kwcid=AL%216089%213%21Keyword%21EXACT%21%21g%21%21versace&utm_term=versace&utm_adgroup=Exact&utm_campaignname=01_Top_Brand_Exact_INT-WW&wt_mc=_I.SEM.Google.Text.01_Top_Brand_Exact_INT-WW.Exact">
                <Image
                  className="w-[117px] h-[24px] md:w-[167px] md:h-[33px]"
                  src="/images/ver.svg"
                  alt="Versace Logo"
                  width={167}
                  height={33}
                  priority
                />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a 
              target="_blank"
              href="https://www.zara.com/">
                <Image
                  className=" md:w-[91px] md:h-[38px] w-[64px] h-[28px]"
                  src="/images/zara-logo.svg"
                  alt="Zara Logo"
                  width={91}
                  height={38}
                  priority
                />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a 
              target="_blank"
              href="https://www.gucci.com/us/en/?srsltid=AfmBOoqPtdsTvoXYnqDa5ZRdOC1dYTCSx77SjeJNjvWJvjj8PxqrUQre">
                <Image
                  className="md:w-[156px] w-[110px] md:h-[36px] h-[25px]"
                  src="/images/gucci-logo.svg"
                  alt="Gucci logo"
                  width={156}
                  height={36}
                  priority
                />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a
              target="_blank"
              href="https://www.prada.com/ww/en.html">
                <Image
                  className="md:w-[194px] w-[127px] md:h-[32px] h-[21px]"
                  src="/images/prada-logo.svg"
                  alt="Prada Logo"
                  width={194}
                  height={32}
                  priority
                />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a
              target="_blank"
              href="https://www.calvinklein.us/en">
                <Image
                  className="w-[135px] h-[22px] md:w-[207px] md:h-[33px]"
                  src="/images/calvin.svg"
                  alt="Calvin Kelin Logo"
                  width={207}
                  height={33}
                  priority
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Shop;
