import Title from "./title";
import Link from "next/link";
import { ProjectType } from "../app/page";

export default function Card({
  id,
  title,
  description,
  card_hover_styles,
}: ProjectType) {
  return (
    <div className="relative group">
      <div className="absolute inset-x-0 bg-black bottom-0 z-20 h-full transition-all duration-300 group-hover:h-10"></div>
      <div
        className="relative w-52 h-52 flex flex-col rounded-md bg-slate-700 p-4 gap-4 group-hover:bg-cover"
        style={card_hover_styles ? JSON.parse(card_hover_styles) : {}}
      >
        <div className="z-20">
          <Title text={title} tag="h4" />
          <p className="text-sm text-white group-hover:opacity-0 transition-all duration-200">
            {description}
          </p>
          <Link
            className="absolute text-white bottom-2 right-4"
            href={`/project/${id}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
