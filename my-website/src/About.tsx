export default function About() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Git",
    "GitHub",
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
        <div className="flex justify-evenly py-3">
          {skills.map((skill) => (
            <div className="bg-medgrey rounded px-4 py-2">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
