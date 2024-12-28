import { Icon } from "@iconify/react";

const icons = [
  "logos:nextjs-icon",
  "logos:react",
  "devicon:angular",
  "devicon:vuejs-wordmark",
  "devicon:reactnative-wordmark",
  "devicon:astro",
  "devicon:typescript",
  "vscode-icons:file-type-js-official",
  "devicon:tailwindcss",
  "devicon:figma",
  "vscode-icons:file-type-html",
  "vscode-icons:file-type-css",
  "devicon:bootstrap",
  "logos:nodejs-icon-alt",
  "vscode-icons:file-type-python",
  "devicon:mongodb",
  "devicon:postgresql",
  "devicon:mysql",
];

const Stack = () => {
  return (
    <section
      data-aos="fade-up"
      className={`mt-7 sm:flex sm:gap-3 items-end ease-in duration-500 `}
    >
      <h2 className="text">My Stack:</h2>
      <div className="text-2xl md:text-3xl flex flex-wrap gap-4 mt-2 text-secondary-100">
        {icons.map((icon, i) => (
          <Icon key={i} icon={icon} width={24} height={24} />
        ))}
      </div>
    </section>
  );
};

export default Stack;
