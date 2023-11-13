import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="my-6">
      <h1 className="text-center text-2xl">Let's Connect!</h1>
      <div className="flex justify-center py-3">
        <a
          className="px-2 hover:text-blue"
          href="https://www.linkedin.com/in/aaron-soukaphay/"
          target="_blank"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          className="px-2 hover:text-blue"
          href="https://github.com/aaronsoukaphay"
          target="_blank"
        >
          <BsGithub size={30} />
        </a>
      </div>
    </div>
  );
}
