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
import type { ProjectType } from "@/app/page";
import type { AccordionData } from "@/components/project-accord";
import type { MediaItem } from "@/components/media-gallery";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;

  const project = projectsData.projects.find(
    (project) => project.id === parseInt(id),
  ) as ProjectType;

  const accordionData: AccordionData[] =
    project.techstack_description?.map((description, index) => ({
      id: index.toString(),
      title: project.techstack?.[index] || "",
      content: description,
    })) || [];

  const mediaItems: MediaItem[] = [];
  if (project.video) {
    mediaItems.push({
      id: 0,
      type: "video",
      src: project.video.replace("watch?v=", "embed/"),
      thumbnail: `/images/${project.thumbnail}`, // Set the thumbnail for the video
    });
  }
  if (project.image_2 && mediaItems.length < 3) {
    mediaItems.push({
      id: mediaItems.length,
      type: "image",
      src: `/images/${project.image_2}`,
    });
  }
  if (project.image_3 && mediaItems.length < 3) {
    mediaItems.push({
      id: mediaItems.length,
      type: "image",
      src: `/images/${project.image_3}`,
    });
  }
  if (project.card_image && mediaItems.length < 3) {
    mediaItems.push({
      id: mediaItems.length,
      type: "image",
      src: `/images/${project.card_image}`,
    });
  }

  return (
    <main className="mx-auto mt-14 flex w-full max-w-3xl flex-col items-center px-4 sm:items-start sm:px-0">
      <div className="flex w-full justify-start">
        <ArrowButton className="mb-6" url="/" orientation="left" />
      </div>
      <Title text={project.title} tag="h2" />
      <div className="mt-6 flex w-full flex-col items-center justify-between gap-2 sm:flex-row sm:items-start sm:gap-12">
        <div className="flex flex-col">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={"/images/" + project.card_image}
              alt="Mads Kristensen"
              width={400}
              height={400}
              className="w-full scale-[130%]"
            />
          </div>
          <div className="mt-4 flex justify-center gap-4 sm:justify-start">
            <div className="flex items-center gap-5 rounded-md bg-slate-700 p-3">
              {project.techstack_icons?.map((icon, index) => (
                <Image
                  key={index}
                  src={"/logos/" + icon}
                  alt={`Icon ${index}`}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-0">
          <Title text="Technologies" tag="h3" />
          <ProjectAccord accordionData={accordionData} />
          <div className="mt-4 flex gap-6">
            {project.github && (
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
        <p
          dangerouslySetInnerHTML={{ __html: project.long_description || "" }}
          className="whitespace-pre-wrap text-sm text-white/90 xs:text-base"
        ></p>
      </div>
      <div className="mt-8 w-full">
        <MediaGallery mediaItems={mediaItems} />
      </div>
    </main>
  );
}
