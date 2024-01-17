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
    {
      name: "AWS",
      img: "/images/icons/aws.svg",
    },
    {
      name: "Vite",
      img: "/images/icons/vite.svg",
    },
    {
      name: "Canva",
      img: "/images/icons/canva.svg",
    },
    {
      name: "ESLint",
      img: "/images/icons/eslint.svg",
    },
    {
      name: "Docker",
      img: "/images/icons/docker.svg",
    },
    {
      name: "NPM",
      img: "/images/icons/npm.svg",
    },
    {
      name: "React Router",
      img: "/images/icons/react-router.svg",
    },
  ];

  return (
    <div className="font-mono min-h-screen mb-10">
      <div className="text-center text-4xl pb-6">ABOUT ME</div>
      <div className="flex flex-wrap justify-center">
        <div className="basis-full xl:basis-1/2 px-5 pt-6">
          <div className="text-2xl pb-4 text-center xl:text-start">
            Get to know me!
          </div>
          <div className="text-sm xl:text-lg text-center xl:text-start">
            Hello! My professional journey began in the healthcare industry but
            my true passion lies in the dynamic world of web development.
            Holding a degree in science has instilled in me a strong foundation
            in research, critical thinking, and problem-solving.
            <br />
            <br />
            This unique synthesis allows me to approach projects with a holistic
            mindset, understanding not only the technical intricacies but also
            the human-centric aspects that make a digital experience truly
            impactful. I believe in crafting solutions that blend functionality
            with user empathy, ensuring a meaningful impact in the digital
            landscape.
            <br />
            <br />
            When I'm not coding I like to stay active by going to the gym and
            playing sports like badminton, pickleball, and basketball. I also
            enjoy watching movies and tv series as a way to undwind at the end
            of the day.
          </div>
        </div>
        <div className="basis-full xl:basis-1/2 pt-6">
          <div className="text-2xl pb-4 text-center xl:text-start">
            My Skills
          </div>
          <div className="flex flex-wrap justify-center xl:justify-start gap-1">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white text-black rounded px-4 py-2 basis-1/2 lg:basis-1/5"
              >
                <div className="flex justify-center">
                  <img src={skill.img} width="80%" />
                </div>
                <h1 className="text-center">{skill.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
