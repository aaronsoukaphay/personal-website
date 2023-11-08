import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="my-4">
      <h1 className="text-center text-2xl">Let's Connect!</h1>
      <div className="flex justify-center">
        <a className="px-2" href="https://www.linkedin.com/in/aaron-soukaphay/">
          <BsLinkedin />
        </a>
        <a className="px-2" href="https://github.com/aaronsoukaphay">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
