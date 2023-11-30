import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="py-6 bg-medgrey">
      <div className="text-center">
        <div className="text-4xl pb-6">CONTACT</div>
      </div>
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
