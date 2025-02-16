import Title from "@/components/title";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import ProjectAccord from "@/components/project-accord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MediaGallery from "@/components/media-gallery";

interface Params {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Params) {
  const { id } = params;

  const project = projectsData.projects.find(
    (project) => project.id === parseInt(id)
  );

  const accordionData = project?.techstack_description.map(
    (description, index) => ({
      id: index.toString(),
      title: project?.techstack[index],
      content: description,
    })
  );

  return (
    <main className="flex flex-col justify-center max-w-3xl mx-auto mt-40">
      <Title text={project?.title} tag="h2" />
      <div className="flex justify-between mt-6">
        <div className="flex flex-col">
          <Image
            src={"/images/" + project?.card_image}
            alt="Mads Kristensen"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="flex gap-4 mt-4">
            {project?.techstack_icons.map((icon, index) => (
              <Image
                key={index}
                src={"/logos/" + icon}
                alt={`Icon ${index}`}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>
        <div>
          <Title text="Technologies" tag="h3" />
          <ProjectAccord accordionData={accordionData} />
          <div className="mt-4 flex gap-6">
            <Link
              href="https://github.com"
              className="text-white hover:text-slate-300 transition-all"
            >
              <FontAwesomeIcon icon={faGithub} size={"lg"} />
            </Link>
            <Link
              href="https://github.com"
              className="text-white hover:text-slate-300 transition-all"
            >
              Visit website{" "}
              <FontAwesomeIcon
                style={{ transform: "rotate(315deg)" }}
                icon={faArrowRight}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-white/80">{project?.long_description}</p>
      </div>
      <div className="mt-8">
        <MediaGallery />
      </div>
    </main>
  );
}
