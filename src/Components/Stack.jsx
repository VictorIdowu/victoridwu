import { Icon } from "@iconify/react";

const Stack = () => {
  return (
    <section
      data-aos="fade-up"
      className={`mt-7 sm:flex sm:gap-3 items-end ease-in duration-500 `}
    >
      <h2 className="text">My Stack:</h2>
      <div className="text-2xl md:text-3xl flex flex-wrap gap-4 mt-2 text-secondary-100">
        <Icon icon="logos:react" />
        <Icon icon="vscode-icons:file-type-js-official" />
        <Icon icon="devicon:tailwindcss" />
        <Icon icon="devicon:figma" />
        <Icon icon="vscode-icons:file-type-html" />
        <Icon icon="vscode-icons:file-type-css" />
        <Icon icon="devicon:bootstrap" />
        <Icon icon="logos:nodejs-icon-alt" />
        <Icon icon="vscode-icons:file-type-vite" />
        <Icon icon="devicon:astro" />
        <Icon icon="logos:nextjs-icon" />
        <Icon icon="devicon:typescript" />
      </div>
    </section>
  );
};

export default Stack;
