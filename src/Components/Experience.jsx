import encentral from "../imgs/encentral.jpeg";
import hng from "../imgs/hng.jpeg";

const data = [
  // {
  //   name: "Encentral Solutions Limited",
  //   role: "Frontend Developer",
  //   img: encentral,
  //   period: "Jan 2025 - Present",
  //   description: "...",
  // },
  {
    name: "Encentral Solutions Limited",
    role: "Frontend Developer Intern",
    img: encentral,
    period: "June 2024 - Nov 2024",
    description:
      "Developed an employee management system utilizing Angular, Semantic UI, SCSS, and various Angular-related libraries. Responsibilities included API integration, designing and implementing complex state management solutions, and ensuring seamless user interfaces. Additionally, contributed to other rojects with similar tools and frameworks, such as Formantic UI and Angular Material, to deliver responsive and efficient web applications.",
  },
  {
    name: "HNG Internship",
    role: "Frontend Developer Intern",
    img: hng,
    period: "Sept 2023 - Oct 2023",
    description:
      "Worked on a marketplace web application (microservice) for Zuri Portfolio, a platform that brings you the brightest and best designers, developers, engineers, or any creative talent from across the globe. I was part of a dedicated team of 50 professionals that built this project.",
  },
];

const Experience = () => {
  return (
    <section className="sections mb-32">
      <h2 data-aos="fade-down" className={`h2 mb-7 ease-in duration-300`}>
        Work Experience
      </h2>

      <div className="flex flex-col gap-6 items-center">
        {data.map((item, i) => (
          <div
            key={i}
            className={`relative z-10 w-full lg:w-[700px] flex gap-6 ${
              i % 2 === 1 && "flex-row-reverse "
            }`}
          >
            <img
              data-aos={`${i % 2 === 1 ? "fade-left" : "fade-right"}`}
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover shadow-md 
              border-white bg-white/20 backdrop-blur-md p-2 xs:absolute z-10"
            />

            <div className="relative xs:pl-[120px] xs:pt-0 grow">
              <div
                className={`absolute inset-0 top-8 border border-dashed h-0.5 w-20 z-0  
                 border-white/30 backdrop-blur-md ${
                   i % 2 === 1 ? "left-[92%]" : "-left-10"
                 }`}
              ></div>
              <div className="text-white bg-secondary-100/10 backdrop-blur-md rounded-xl p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-xs font-medium text-secondary-100">
                  {item.role}
                </p>
                <p className="text-white/50 tracking-wide text-sm">
                  {item.period}
                </p>
                <p className="text-white/75 text-sm pt-4">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
