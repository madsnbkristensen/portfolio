import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto my-28 w-[90%] max-w-3xl md:w-full">
      <div className="flex justify-between text-lg text-white">
        <div className="flex gap-2">
          <Link
            href="https://github.com/madsnbkristensen"
            target="_blank"
            className="transition-all hover:text-slate-300"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mads-nederby-bj%C3%B8dstrup-kristensen-30364324a/"
            target="_blank"
            className="transition-all hover:text-slate-300"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
          </Link>
        </div>
        <div>madskristensen@hotmail.dk</div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
    </footer>
  );
}
