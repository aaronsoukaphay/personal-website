import { motion } from "framer-motion";

export default function About() {
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
      img: "/images/icons/framer-motion.svg",
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
    {
      name: "Figma",
      img: "/images/icons/figma.svg",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-screen font-mono">
      <div className="text-center text-4xl pb-6">ABOUT ME</div>
      <p className="text-center mb-5">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="flex gap-5">
        <div className="basis-1/2">
          <div className="text-2xl pb-4">Get to know me!</div>
          <div className="text-xl">
            Hello! My journey began in the healthcare industry, but my true
            passion lies in the dynamic world of web development. Holding a
            degree in science has instilled in me a strong foundation in
            research, critical thinking, and problem-solving. This background,
            combined with my background in web development, brings a unique
            perspective to my work.
          </div>
        </div>
        <div className="basis-1/2">
          <div className="text-2xl pb-4">My Skills</div>
          <motion.div
            className="flex flex-wrap gap-1"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                variants={item}
                key={index}
                className="bg-white text-black rounded px-4 py-2 xl:basis-1/6 md:basis-1/5 sm:basis-1/2"
              >
                <div className="flex justify-center">
                  <img src={skill.img} width="80%" />
                </div>
                <h1 className="text-center">{skill.name}</h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
