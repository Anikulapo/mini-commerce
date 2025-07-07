import Image from "next/image";

const Shop: React.FC = () => {
  return (
    <>
      <div className="pt-10 bg-[#F2F0F1] ">
        <section className=" relative pt-[8%] xl:pt-[10%] px-[5%]  bg-[url('/images/model.svg')] bg-cover bg-no-repeat text-black  grid grid-cols-2 gap-10">
          <div>
            <h1 className="font-pop 
                            lg:text-5xl
                            xl:text-6xl font-[750] text-left
                             md:text-4xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="font-al text-[rgba(0,0,0,.6)] 
            lg:mt-4 text-left md:text-[12px] lg:text-[16px] xl:text-[18px]
            md:pb-4 md:pt-3 xl:pb-8 xl:pt-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="text-white bg-black rounded-full
                                 md:py-2 md:px-7 
                                 lg:py-3 lg:px-10
                                 xl:py-4 xl:px-15 ">
              Shop Now
            </button>

            <ul className="flex flex-wrap md:pt-6 lg:pt-12 md:gap-4 lg:gap-8 md:pb-5">
              <li className="font-al 
                            md:pr-2 
                            lg:pr-4
                            xl:pr-8 border-r border-[rgba(0,0,0,.1)]">
                <h2 className="xl:text-4xl font-[750] text-left 
                                
                                md:text-2xl font-pop">
                  200+{" "}
                </h2>
                <p className="text-[rgba(0,0,0,.6)] md:text-[10px] 
                                
                                xl:text-[18px] font-al ">
                  International Brands
                </p>
              </li>
              <li className="font-al 
                            md:pr-2
                            lg:pr-4
                            xl:pr-8 border-r border-[rgba(0,0,0,.1)]">
                <h2 className=" lg:text-3xl
                                xl:text-4xl font-[750] text-left md:text-2xl font-pop">
                  2,000+{" "}
                </h2>
                <p className="text-[rgba(0,0,0,.6)] md:text-[10px] 
                            
                            xl:text-[18px] font-al">
                  High-Quality Products
                </p>
              </li>
              <li className="font-al">
                <h2 className="xl:text-4xl font-[750] text-left 
                                
                                md:text-2xl font-pop">
                  30,000+{" "}
                </h2>
                <p className="text-[rgba(0,0,0,.6)] md:text-[10px] 
                                
                                xl:text-[18px] font-al">
                  Happy Customers
                </p>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <Image
              className="absolute top-[-5%] right-[5%] text-black
              md:top-[-5%] md:right-[-5%] 
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
              md:left-[15%]
              md:w-[28px] lg:w-[56px]"
              src="/images/Vector.svg"
              alt="Black Star"
              width={56}
              height={56}
              priority
            />
          </div>
        </section>
        <div className=" bg-black px-[5%] py-11">
          <ul className="flex flex-wrap justify-between items-center">
            <li className="hover:cursor-pointer">
              <a href="https://www.versace.com/ng/en/?gclsrc=aw.ds&gclid=Cj0KCQjwvajDBhCNARIsAEE29Wo059LxmBazC4Akw3WUg1ijs-B4o_x3mqW1EE1a-Fn1-nHclZeGvWUaAjzCEALw_wcB&gbraid=0AAAAADnzP0YRUP43eBsH8OmyP91DY9opO&gad_campaignid=6608619505&gad_source=1&s_kwcid=AL%216089%213%21Keyword%21EXACT%21%21g%21%21versace&utm_term=versace&utm_adgroup=Exact&utm_campaignname=01_Top_Brand_Exact_INT-WW&wt_mc=_I.SEM.Google.Text.01_Top_Brand_Exact_INT-WW.Exact">
                  <Image
                    className=""
                    src="/images/ver.svg"
                    alt="Versace Logo"
                    width={167}
                    height={33}
                    priority
                  />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a href="https://www.zara.com/">
                  <Image
                    className=""
                    src="/images/zara-logo.svg"
                    alt="Zara Logo"
                    width={91}
                    height={38}
                    priority
                  />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a href="https://www.gucci.com/us/en/?srsltid=AfmBOoqPtdsTvoXYnqDa5ZRdOC1dYTCSx77SjeJNjvWJvjj8PxqrUQre">
                  <Image
                    className=""
                    src="/images/gucci-logo.svg"
                    alt="Gucci logo"
                    width={156}
                    height={36}
                    priority
                  />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a href="https://www.prada.com/ww/en.html">
                  <Image
                    className=""
                    src="/images/prada-logo.svg"
                    alt="Prada Logo"
                    width={194}
                    height={32}
                    priority
                  />
              </a>
            </li>

            <li className="hover:cursor-pointer">
              <a href="https://www.calvinklein.us/en">
                  <Image
                    className=""
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
