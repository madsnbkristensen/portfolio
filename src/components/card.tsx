import Title from "./title";
import Link from "next/link";
import { ProjectType } from "../app/page";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({
  id,
  title,
  description,
  card_image,
}: ProjectType) {
  return (
    <div className="project-card relative group overflow-hidden bg-slate-700 rounded-md">
      <div className="card-overlay absolute inset-x-0 bottom-0 z-20 h-full transition-all duration-300 group-hover:h-10"></div>
      <div
        className="relative w-56 h-56 flex flex-col rounded-md p-4 gap-4 transition-all duration-300 card-image"
        style={{
          backgroundImage: `url(images/${card_image})`,
        }}>
        <div className="z-20">
          <Title text={title} tag="h4" />
          <p className="text-sm mt-2 text-white group-hover:opacity-0 transition-all duration-200">
            {description}
          </p>
        </div>
      </div>
      <Link
        className="card-link absolute text-white flex items-center bottom-2 right-4 z-20 transition-all duration-200"
        href={`/project/${id}`}>
        <span className="opacity-0 transition-all duration-200 group-hover:opacity-100">
          Read more
        </span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-2 transform transition-transform rotate-45 duration-200 group-hover:rotate-0"
        />
      </Link>
    </div>
  );
}
