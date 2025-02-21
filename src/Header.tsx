import AppDrawer from "./AppDrawer";

export default function Header() {
  const headings = ["home", "about", "projects", "contact"];
  const tabs = ["Home", "About", "Projects", "Contact"];
  const header = ["Menu"];

  return (
    <header className="py-5 font-mono">
      <div className="container mx-auto px-2">
        <div className="flex justify-center lg:justify-start items-center">
          <div>
            <div className="flex border border-white text-2xl rounded-sm">
              <div className="px-2 font-bold">AARON</div>
              <div className="bg-white text-black px-2 font-bold">
                SOUKAPHAY
              </div>
            </div>
          </div>
          <div>
            <AppDrawer tabs={tabs} header={header} />
          </div>
        </div>
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-darkgrey bg-opacity-70 border-none rounded-full px-5 py-2 hidden lg:block">
          <div className="flex gap-5">
            {headings.map((heading, index) => (
              <div key={index}>
                <div className="text-end text-xs">{`0${index + 1}`}</div>
                //{" "}
                <a
                  className="text-md hover:text-blue"
                  href={`#${heading === "home" ? "" : heading}`}
                >
                  {heading}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
