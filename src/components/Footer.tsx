import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className=" px-[5%] bg-[#F0F0F0] pt-[10%] pb-[5%] w-full">
      <div className="flex flex-col md:flex-row pb-10 border-b  border-[rgba(0,0,0,.3)] md:justify-between gap-10">
        <div className="flex gap-4 flex-col max-w-[300px]">
          <h1 className="font-pop text-3xl font-bold text-black">MINI COMMERCE</h1>
          <p className="font-al text-[rgba(0,0,0,.6)]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <ul className="flex gap-3">
            <li>
              <a href="#">
                <Image
                  // className="dark:invert"
                  src="/images/tweet.svg"
                  alt="tweeter logo"
                  width={28}
                  height={28}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  // className="dark:invert"
                  src="/images/face.svg"
                  alt="tweeter logo"
                  width={28}
                  height={28}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  // className="dark:invert"
                  src="/images/insta.svg"
                  alt="tweeter logo"
                  width={28}
                  height={28}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="#">
                 <Image
                  // className="dark:invert"
                  src="/images/git.svg"
                  alt="tweeter logo"
                  width={28}
                  height={28}
                  priority
                />
              </a>
            </li>
          </ul>
        </div>
        <div
          className="grid grid-cols-2 gap-5  items-center
                        md:flex md:flex-wrap md:w-[60%] md:gap-8
                        lg:justify-between "
        >
          <div className="flex flex-col gap-6 w-[132px]">
            <h2 className="font-pop tracking-[2px] text-black">COMPANY</h2>
            <ul className="font-al text-[rgba(0,0,0,.6)] flex flex-col gap-4">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-pop tracking-[2px] text-black">HELP</h2>
            <ul className="font-al text-[rgba(0,0,0,.6)] flex flex-col gap-4">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-pop tracking-[2px] text-black">FAQ</h2>
            <ul className="font-al text-[rgba(0,0,0,.6)] flex flex-col gap-4">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-pop tracking-[2px] text-black">COMPANY</h2>
            <ul className="font-al text-[rgba(0,0,0,.6)] flex flex-col gap-4">
              <li>Free eBooks Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-6">
        <p className="font-al text-[rgba(0,0,0,.6)] text-[14px] md:text-[16px]">
          Mini Commerce © 2000-2025, All Rights Reserved
        </p>
        <Image
                  // className="dark:invert"
                  src="/images/pay.svg"
                  alt="tweeter logo"
                  width={282}
                  height={30}
                  priority
                />
      </div>
    </footer>
  );
};

export default Footer;
