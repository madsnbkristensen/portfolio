import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="w-full mx-auto max-w-3xl my-28">
      <div className="flex justify-between text-white text-lg">
        <div className="flex gap-2">
          <FontAwesomeIcon size="lg" icon={faGithub} />
          <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
        </div>
        <div>madskristensen@hotmail.dk</div>
      </div>
      <div className="bg-white w-full h-[1px]"></div>
    </footer>
  );
}
