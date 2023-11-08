import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="my-4">
      <h1 className="text-center text-2xl">Let's Connect!</h1>
      <div className="flex justify-center py-3">
        <a className="px-2" href="https://www.linkedin.com/in/aaron-soukaphay/">
          <BsLinkedin size={30} />
        </a>
        <a className="px-2" href="https://github.com/aaronsoukaphay">
          <BsGithub size={30} />
        </a>
      </div>
    </div>
  );
}
