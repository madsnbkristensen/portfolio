import Title from "@/components/title";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import ProjectAccord from "@/components/project-accord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MediaGallery from "@/components/media-gallery";
import ArrowButton from "@/components/ui/arrowButton";

interface Params {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Params) {
  const { id } = params;

  const project = projectsData.projects.find(
    (project) => project.id === parseInt(id),
  );

  const accordionData = project?.techstack_description.map(
    (description, index) => ({
      id: index.toString(),
      title: project?.techstack[index],
      content: description,
    }),
  );

  return (
    <main className="mx-auto mt-14 flex w-full max-w-3xl flex-col items-center px-4 sm:items-start sm:px-0">
      <div className="flex w-full justify-start">
        <ArrowButton className="mb-6" url="/" orientation="left" />
      </div>
      <Title text={project?.title} tag="h2" />
      <div className="mt-6 flex w-full flex-col items-center justify-between gap-2 sm:flex-row sm:items-start sm:gap-12">
        <div className="flex flex-col">
          <Image
            src={"/images/" + project?.card_image}
            alt="Mads Kristensen"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
          <div className="mt-4 flex justify-center gap-4 sm:justify-start">
            <div className="flex items-center gap-5 rounded-md bg-slate-700 p-3">
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
        </div>
        <div className="mt-6 sm:mt-0">
          <Title text="Technologies" tag="h3" />
          <ProjectAccord accordionData={accordionData} />
          <div className="mt-4 flex gap-6">
            {project?.github && (
              <Link
                href={project.github}
                className="text-white transition-all hover:text-slate-300"
              >
                <FontAwesomeIcon icon={faGithub} size={"lg"} />
              </Link>
            )}
            <Link
              href="https://github.com"
              className="text-white transition-all hover:text-slate-300"
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
      <div className="mt-10">
        <p className="xs:text-base whitespace-pre-wrap text-sm text-white/80">
          {project?.long_description}
        </p>
      </div>
      <div className="mt-8 w-full">
        <MediaGallery />
      </div>
    </main>
  );
}
