export default function About() {
  // const skills = [
  //   "TypeScript",
  //   "JavaScript",
  //   "React.js",
  //   "HTML5",
  //   "CSS3",
  //   "Node.js",
  //   "Express.js",
  //   "PostgreSQL",
  //   "Git",
  //   "GitHub",
  // ];

  const skills = [
    {
      name: "TypeScript",
      img: "/images/icons/typescript.svg",
    },
    {
      name: "JavaScript",
      img: "/images/icons/javascript.svg",
    },
    {
      name: "React.js",
      img: "/images/icons/react.svg",
    },
    {
      name: "HTML5",
      img: "/images/icons/html.svg",
    },
    {
      name: "CSS3",
      img: "/images/icons/css.svg",
    },
    {
      name: "Node.js",
      img: "/images/icons/node.svg",
    },
    {
      name: "Express.js",
      img: "/images/icons/express.svg",
    },
    {
      name: "PostgreSQL",
      img: "/images/icons/postgresql.svg",
    },
    {
      name: "Bootstrap5",
      img: "/images/icons/bootstrap.svg",
    },
    {
      name: "Tailwind CSS",
      img: "/images/icons/tailwind.svg",
    },
    {
      name: "Framer Motion",
      img: "/images/icons/html.svg",
    },
    {
      name: "VS Code",
      img: "/images/icons/vscode.svg",
    },
    {
      name: "Git",
      img: "/images/icons/git.svg",
    },
    {
      name: "GitHub",
      img: "/images/icons/github.svg",
    },
  ];

  return (
    <div className="h-screen flex items-center">
      <div>
        <div className="text-center text-2xl">About Me</div>
        <div className="text-xl">
          Hello! My journey began in the healthcare industry, but my true
          passion lies in the dynamic world of web development. Holding a degree
          in science has instilled in me a strong foundation in research,
          critical thinking, and problem-solving. This background, combined with
          my background in web development, brings a unique perspective to my
          work.
        </div>
        <div className="text-center text-2xl">My Skills</div>
        <div className="text-xl">
          I recently completed an intensive and accelerated web development
          program. This program equipped me with a diverse set of valuable
          skills, including JavaScript ES5/ES6, TypeScript, React.js, Node.js,
          Express, HTML5, and CSS3, enabling me to hit the ground running in the
          fast-paced world of web development.
        </div>
        <div className="flex flex-wrap justify-evenly py-3 gap-1">
          {skills.map((skill) => (
            <div className="bg-white text-black rounded px-4 py-2 xl:basis-1/6 md:basis-1/5 sm:basis-1/2">
              <div className="flex justify-center">
                <img src={skill.img} />
              </div>
              <h1 className="text-center">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
