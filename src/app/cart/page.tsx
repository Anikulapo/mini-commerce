const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row px-[5%] bg-[#F0F0F0]">
      <div className="flex gap-3 flex-col">
        <h1 className="font-pop text-3xl font-bold">MINI COMMERCE</h1>
        <p className="font-al text-[rgba(0,0,0,.6)]">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>

        <ul className="flex gap-3">
            <li><a href="#"><img src="/images/tweet.svg" alt="twitter" /></a></li>
            <li><a href="#"><img src="/images/face.svg" alt="Facebook" /></a></li>
            <li><a href="#"><img src="/images/insta.svg" alt="Instagram" /></a></li>
            <li><a href="#"><img src="/images/git.svg" alt="Github" /></a></li>
        </ul>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
