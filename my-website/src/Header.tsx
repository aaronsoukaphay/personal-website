export default function Header() {
  const headings = ["home", "about", "projects", "contact"];
  return (
    <header className="py-5 bg-medgrey fixed w-screen font-mono">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-3xl text-blue">Aaron Soukaphay</h3>
          </div>
          <div className="flex gap-5">
            {headings.map((heading, i) => (
              <a
                key={i}
                className="uppercase text-xl hover:text-blue"
                href={`#${heading}`}
              >
                {heading}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
