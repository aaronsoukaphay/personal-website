export default function Projects() {
  const ajax = ["JavaScript", "HTML", "CSS", "Jikan API"];
  const final = [
    "TypeScript",
    "React.js",
    "PostgreSQL",
    "Express.js",
    "Node.js",
    "Bootstrap",
  ];

  return (
    <div className="h-screen flex items-center">
      <div>
        <h1 className="text-center text-2xl">My Projects</h1>
        <p className="text-center mb-5">
          Here are some projects I've worked on.
        </p>
        <div className="flex justify-between gap-6">
          <div className="bg-medgrey rounded">
            <img src="/images/anime-experts.png" className="rounded-t" />
            <div className="p-5">
              <div className="text-2xl py-3">Anime Experts</div>
              <div>
                A dynamic web application for anime enthusiasts who want to
                explore anime and manage their watchlist
              </div>
              <div className="flex gap-3 py-3">
                {ajax.map((lang) => (
                  <p className="border rounded-2xl py-1 px-2">{lang}</p>
                ))}
              </div>
              <div className="text-center flex justify-evenly py-4">
                <a
                  href="https://aaronsoukaphay.github.io/anime-experts/"
                  target="_blank"
                  className="bg-purple rounded px-5 py-2"
                >
                  Live
                </a>
                <a
                  href="https://github.com/aaronsoukaphay/anime-experts"
                  target="_blank"
                  className="bg-purple rounded px-5 py-2"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
          <div className="bg-medgrey rounded">
            <img src="/images/touchdown-threads.png" className="rounded-t" />
            <div className="p-5">
              <div className="text-2xl py-3">Touchdown Threads</div>
              <div>
                A full stack e-commerce web application for NFL enthusiasts who
                want to shop for football apparel.
              </div>
              <div className="flex gap-3 py-3">
                {final.map((lang) => (
                  <p className="border rounded-2xl py-1 px-2">{lang}</p>
                ))}
              </div>
              <div className="text-center flex justify-evenly py-4">
                <a
                  href="http://final-project-dev.us-west-1.elasticbeanstalk.com/"
                  target="_blank"
                  className="bg-purple rounded px-5 py-2"
                >
                  Live
                </a>
                <a
                  href="https://github.com/aaronsoukaphay/touchdown-threads"
                  target="_blank"
                  className="bg-purple rounded px-5 py-2"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
