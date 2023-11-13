export default function Header() {
  const headings = ["home", "about", "projects", "contact"];
  return (
    <div className="py-3">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl text-blue">Aaron Soukaphay</h3>
          </div>
          <div className="flex">
            {headings.map((heading, i) => (
              <a key={i} className="uppercase px-1 hover:text-blue" href="#">
                {heading}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
