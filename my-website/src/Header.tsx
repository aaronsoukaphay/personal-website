export default function Header() {
  const headings = ["home", "about", "projects", "contact"];
  return (
    <header className="py-6 bg-medgrey fixed w-screen">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl text-blue">Aaron Soukaphay</h3>
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
