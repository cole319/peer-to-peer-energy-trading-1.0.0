import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pb-10 space-y-2">
      <div className="flex items-center justify-center space-x-2 text-neutral-200 ">
        <h1>© Suryarghya Saha</h1>{" "}
        <a
          href="https://github.com/cole319"
          target="_blank"
          className="hover:underline"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-center">2023</p>
    </div>
  );
}
