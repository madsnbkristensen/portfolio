import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="mx-auto my-28 w-full max-w-3xl">
      <div className="flex justify-between text-lg text-white">
        <div className="flex gap-2">
          <FontAwesomeIcon size="lg" icon={faGithub} />
          <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
        </div>
        <div>madskristensen@hotmail.dk</div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
    </footer>
  );
}
