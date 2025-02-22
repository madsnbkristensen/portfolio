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
    <div className="project-card group relative overflow-hidden rounded-md bg-slate-700">
      <div className="card-overlay absolute inset-x-0 bottom-0 z-20 h-full transition-all duration-300 group-hover:h-10"></div>
      <div
        className="card-image relative flex h-56 w-56 flex-col gap-4 rounded-md p-4 transition-all duration-300"
        style={{
          backgroundImage: `url(images/${card_image})`,
        }}
      >
        <div className="z-20">
          <Title text={title} tag="h4" />
          <p className="mt-2 text-sm text-white transition-all duration-200 group-hover:opacity-0">
            {description}
          </p>
        </div>
      </div>
      <Link
        className="card-link absolute bottom-2 right-4 z-20 flex items-center text-white transition-all duration-200"
        href={`/project/${id}`}
      >
        <span className="opacity-0 transition-all duration-200 group-hover:opacity-100">
          Read more
        </span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-2 rotate-45 transform transition-transform duration-200 group-hover:rotate-0"
        />
      </Link>
    </div>
  );
}
