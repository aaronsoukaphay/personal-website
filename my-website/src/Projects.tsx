export default function Projects() {
  return (
    <div className="py-3">
      <h1 className="text-center text-2xl">My Projects</h1>
      <p className="text-center">Here are some projects I've worked on.</p>
      <div className="flex justify-between">
        <div className="border border-white">
          <div className="p-4">
            <img src="/images/touchdown-threads.png" />
            <div className="text-2xl">Touchdown Threads</div>
            <div>
              A full stack web application for NFL enthusiasts who want to shop
              for football apparel.
            </div>
            <div className="text-center flex justify-evenly">
              <a
                href="http://final-project-dev.us-west-1.elasticbeanstalk.com/"
                className="hover:text-blue-500"
              >
                Live
              </a>
              <a
                href="https://github.com/aaronsoukaphay/touchdown-threads"
                className="hover:text-blue-500"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <div className="border border-white">
          <div className="text-xl">Touchdown Threads</div>
          <img src="/images/touchdown-threads.png" />
          <div>
            A full stack web application for NFL enthusiasts who want to shop
            for football apparel.
          </div>
        </div>
      </div>
    </div>
  );
}
