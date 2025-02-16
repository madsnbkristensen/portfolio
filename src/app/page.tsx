import Title from "../components/title";
import { Button } from "../components/ui/button";
import Image from "next/image";
import {
  faChevronDown,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "@/components/slider";
import projectsData from "@/data/projects.json";
import Card from "@/components/card";

// Define the type for a project
export type ProjectType = {
  id: number;
  title?: string;
  description?: string;
  github?: string;
  website?: string;
  card_image?: string;
  image_2?: string;
  image_3?: string;
  techstack?: string[];
  techstack_description?: string[];
  techstack_icons?: string[];
  video?: string;
  card_hover_styles?: string;
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
            <p className="text-white/80 text-xl mt-4">
              - Web developer with a passion for backend and system development
            </p>
          </div>
          <div className="flex justify-start gap-12 mt-8">
            <Button className="bg-slate-800 w-28 hover:bg-slate-700">
              My skills
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Button>
            <Button className="bg-slate-800 w-28 hover:bg-slate-700">
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
              card_image={project.card_image}
            />
          ))}
        </div>
      </section>
      <section className="w-full mt-20 flex flex-col items-center">
        <div>
          <Title text="About me" tag="h2" />
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-4 mt-4">
          <p className="text-white/80 text-sm">
            Hey there! I'm a 24-year-old web developer based in Aarhus,
            passionate about building sleek, functional, and user-friendly
            digital experiences. With a strong background in JavaScript, React,
            PHP, SQL, and Next.js, I love turning ideas into reality through
            clean and efficient code. When I'm not coding, you’ll probably find
            me exploring new tech trends, enjoying a good coffee, or soaking in
            the creative energy of the city. Always eager to learn, collaborate,
            and take on new challenges—let’s build something great together!
          </p>
          <div className="bg-slate-700 text-white p-4 rounded-md flex flex-col gap-4 justify-center h-fit">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>41819450
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              madskristensen@hotmail.dk
            </div>
          </div>
        </div>
      </section>
      <section className="text-white w-full mt-20 flex flex-col items-center">
        REFERENCER
      </section>
    </main>
  );
}
