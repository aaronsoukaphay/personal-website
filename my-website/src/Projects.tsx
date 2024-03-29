export default function Projects() {
  const projects = [
    {
      title: "Anime Experts",
      description:
        "A dynamic web application for anime enthusiasts who want to explore anime and manage their watchlist.",
      technologies: ["JavaScript", "HTML", "CSS", "Jikan API"],
      image: "/images/anime-experts.png",
      live: "https://aaronsoukaphay.github.io/anime-experts/",
      repo: "https://github.com/aaronsoukaphay/anime-experts",
    },
    {
      title: "Touchdown Threads",
      description:
        "A full stack e-commerce web application for NFL enthusiasts who want to shop for football apparel.",
      technologies: [
        "TypeScript",
        "React.js",
        "PostgreSQL",
        "Express.js",
        "Node.js",
        "Bootstrap",
      ],
      image: "/images/touchdown-threads.png",
      live: "http://final-project-dev.us-west-1.elasticbeanstalk.com/",
      repo: "https://github.com/aaronsoukaphay/touchdown-threads",
    },
    {
      title: "Portfolio Website",
      description:
        "A frontend web application to showcase my skills and projects.",
      technologies: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "AWS Amplify",
      ],
      image: "/images/portfolio-website.png",
      live: "https://main.d2nummp4lg6vcy.amplifyapp.com/#projects",
      repo: "https://github.com/aaronsoukaphay/personal-website",
    },
  ];

  return (
    <div className="min-h-screen mb-10">
      <h1 className="text-center text-4xl pb-6">PROJECTS</h1>
      <p className="text-center mb-5">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
        {projects.map((project, index) => (
          <div
            className="bg-medgrey rounded basis-10/12 xl:basis-1/3"
            key={index}
          >
            <div className="flex justify-center">
              <img
                src={project.image}
                className="rounded-t object-cover h-72 w-full"
              />
            </div>
            <div className="px-5">
              <div className="text-2xl py-3 font-semibold">{project.title}</div>
              <div>{project.description}</div>
              <div className="flex flex-wrap gap-3 py-3">
                {project.technologies.map((lang: string, index: number) => (
                  <p className="border rounded-2xl py-1 px-2" key={index}>
                    {lang}
                  </p>
                ))}
              </div>
              <div className="text-center flex justify-evenly py-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-purple rounded px-5 py-2"
                >
                  Live
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="bg-purple rounded px-5 py-2"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
