import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="h-screen font-mono flex justify-center items-center">
      <div>
        <div className="text-center text-4xl xl:text-7xl">AARON SOUKAPHAY</div>
        <h1 className="text-center text-xl xl:text-3xl py-3 ">
          <span style={{ color: "#66D9ED", fontWeight: "" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Frontend", "Backend", "Fullstack"]}
              loop={10}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
          {""}Developer
        </h1>
        <div className="text-center my-4">
          <a
            href="#projects"
            className="border rounded py-3 px-3 text-md xl:text-xl mx-3"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="border rounded py-3 px-3 text-md xl:text-xl mx-3"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
