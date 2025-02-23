import Title from "../components/title";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "@/components/slider";
import projectsData from "@/data/projects.json";
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import ArrowButton from "@/components/ui/arrowButton";
import Link from "next/link";
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
    <main className="xs:mt-40 xs:px-0 mx-auto mt-20 flex max-w-3xl flex-col items-center justify-center px-4">
      <Navbar />
      <section className="xs:grid xs:grid-cols-[2fr_1fr] xs:gap-2 flex flex-col items-center gap-7 sm:items-start">
        <div>
          <div>
            <Title text="Mads Kristensen" tag="h1" />
            <p className="xs:text-2xl xs:mt-4 xs:px-0 xs:text-start mt-1 px-10 text-center text-lg text-white/80">
              - Web developer with a passion for backend and system development
            </p>
          </div>
          <div className="xs:justify-start xs:mt-8 xs:gap-12 mt-4 flex justify-center gap-6">
            <Link href="#projects">
              <Button className="w-28 bg-slate-800 hover:bg-slate-700">
                Projects
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </Button>
            </Link>
            <Link href="#about">
              <Button className="w-28 bg-slate-800 hover:bg-slate-700">
                About me
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/mads-aveo-img.webp"
          alt="Mads Kristensen"
          width={250}
          height={250}
          className="rounded-xl"
        />
      </section>
      <section className="xs:mt-20 mt-14 flex w-full flex-col items-center">
        <Title text="TechStack" tag="h2" />
        <Slider />
      </section>
      <section
        id="projects"
        className="xs:mt-20 mt-10 flex w-full flex-col items-center"
      >
        <Title text="Projects" tag="h2" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      <section
        id="about"
        className="xs:mt-20 mt-10 flex w-full flex-col items-center"
      >
        <div>
          <Title text="About me" tag="h2" />
        </div>
        <div className="mt-4 flex flex-col-reverse items-center gap-8 sm:flex-row">
          <Image
            src="/images/mads-aveo-profil.webp"
            alt="Mads Kristensen"
            width={200}
            height={200}
            className="rounded-xl"
          />
          <p className="text-center text-sm leading-relaxed text-white/80 sm:text-start">
            Hey there! I'm a 24-year-old web developer based in Aarhus,
            passionate about building sleek, functional, and user-friendly
            digital experiences. With a strong background in JavaScript, React,
            PHP, SQL, and Next.js, I love turning ideas into reality through
            clean and efficient code. When I'm not coding, you’ll probably find
            me exploring new tech trends, enjoying a good coffee, or soaking in
            the creative energy of the city. Always eager to learn, collaborate,
            and take on new challenges—let’s build something great together!
          </p>
        </div>
      </section>
      <ArrowButton
        orientation="up"
        url="#top"
        className="xs:bottom-10 xs:right-10 fixed bottom-5 right-5 z-50"
        showOnScroll={true}
      ></ArrowButton>
    </main>
  );
}
