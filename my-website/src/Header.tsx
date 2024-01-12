import AppDrawer from "./AppDrawer";

export default function Header() {
  const headings = ["home", "about", "projects", "contact"];
  const tabs = ["Home", "About", "Projects", "Contact"];
  const header = ["Menu"];

  return (
    <header className="py-5 w-screen font-mono">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg lg:text-3xl text-blue">Aaron Soukaphay</h3>
          </div>
          <div>
            <AppDrawer tabs={tabs} header={header} />
          </div>
        </div>
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-darkgrey bg-opacity-70 border-none rounded-full px-5 py-2">
          <div className="flex gap-5">
            {headings.map((heading, i) => (
              <div>
                <div className="text-end text-xs">{`0${i + 1}`}</div>
                //{" "}
                <a
                  key={i}
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
