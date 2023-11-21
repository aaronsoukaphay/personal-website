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
    <div className="h-screen">
      <div
        // style={{
        //   backgroundImage: "url(/images/background.jpg)",
        // }}
        className="h-screen flex justify-center items-center"
      >
        {/* <img src="/images/home-background.jpg" className="absolute" /> */}
        <h1 className="text-center text-7xl py-3 ">
          Aaron Soukaphay:{" "}
          <span style={{ color: "#66D9ED", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Frontend", "Backend", "Fullstack"]}
              loop={10}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
          {""}Developer
        </h1>
      </div>
    </div>
  );
}
