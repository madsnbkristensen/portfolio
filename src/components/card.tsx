import Title from "./title";
import Link from "next/link";
import { ProjectType } from "../app/page";

export default function Card({ id, title, description, image }: ProjectType) {
  return (
    <div
      className="relative w-52 h-52 flex flex-col rounded-md bg-slate-700 p-4 gap-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Title text={title} tag="h4" />
      <p>{description}</p>
      <Link className="absolute bottom-2 right-4" href={`/project/${id}`}>
        Read more
      </Link>
    </div>
  );
}
