import Title from "../components/title";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "@/components/slider";
import projectsData from "@/data/projects.json";
import Card from "@/components/card";

// Define the type for a project
export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Explicitly type the projects import
const projects: ProjectType[] = projectsData.projects;

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-40">
      <section className="grid grid-cols-[2fr_1fr] gap-4">
        <div className="max-w-sm">
          <div>
            <Title text="Mads Kristensen" tag="h1" />
            <p className="text-white text-xl mt-4">
              - Web developer with a passion for backend and system development
            </p>
          </div>
          <div className="flex justify-start gap-12 mt-8">
            <Button className="bg-slate-700 w-28 hover:bg-slate-800">
              My skills
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Button>
            <Button className="bg-slate-700 w-28 hover:bg-slate-800">
              Contact
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/mads-aveo-img.webp"
            alt="Mads Kristensen"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      </section>
      <section className="w-full mt-20 flex flex-col items-center">
        <Title text="TechStack" tag="h2" />
        <Slider />
      </section>
      <section className="w-full mt-20 flex flex-col items-center">
        <Title text="Projects" tag="h2" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project: ProjectType) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
