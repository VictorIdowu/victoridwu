import Body from "./Components/Body";
import { Icon } from "@iconify/react";

function App() {
  return (
    <main className="text-primary-100 font-body">
      <Body />
      <div className="border-t-[0.1px] border-primary-300 mb-24 flex flex-col items-center w-full text-sm py-20 gap-10">
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
          Copyright © Victor Idowu 2024 All rights Reserved
        </p>
      </div>
    </main>
  );
}

export default App;
