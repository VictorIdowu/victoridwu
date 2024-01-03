import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t-[0.002px] border-primary-300 mb-24 flex flex-col items-center w-full text-sm py-20 gap-10">
      <h5 className="">Built with:</h5>
      <div className="flex gap-4">
        <div className="flex gap-1 items-center">
          <Icon icon="logos:react" />
          <a
            href="https://react.com"
            target="_blank"
            className="hover:underline"
          >
            React
          </a>
        </div>
        <div className="flex gap-1 items-center">
          <Icon icon="devicon:tailwindcss" />
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="hover:underline"
          >
            Tailwind
          </a>
        </div>
        <div className="flex gap-1 items-center">
          <Icon icon="devicon:vercel" />
          <a
            href="https://vercel.com"
            target="_blank"
            className="hover:underline"
          >
            Vercel
          </a>
        </div>
      </div>
      <p className="text-xs text-primary-300">
        Copyright © Victor Idowu {currentYear} All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
