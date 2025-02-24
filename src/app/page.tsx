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
  title: string;
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
  thumbnail?: string;
};

// Explicitly type the projects import
const projects: ProjectType[] = projectsData.projects;

export default function Home() {
  return (
    <main className="mx-auto mt-20 flex max-w-3xl flex-col items-center justify-center px-4 xs:mt-40 xs:px-0">
      <Navbar />
      <section className="flex flex-col items-center gap-7 xs:grid xs:grid-cols-[2fr_1fr] xs:gap-2 sm:items-start">
        <div>
          <div>
            <Title text="Mads Kristensen" tag="h1" />
            <p className="mt-1 px-10 text-center text-lg text-white/80 xs:mt-4 xs:px-0 xs:text-start xs:text-2xl">
              - Web developer with a passion for backend and system development
            </p>
          </div>
          <div className="mt-4 flex justify-center gap-6 xs:mt-8 xs:justify-start xs:gap-12">
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
      <section className="mt-14 flex w-full flex-col items-center xs:mt-20">
        <Title text="TechStack" tag="h2" />
        <Slider />
      </section>
      <section
        id="projects"
        className="mt-10 flex w-full flex-col items-center xs:mt-20"
      >
        <Title text="Projects" tag="h2" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
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
        className="mt-10 flex w-full flex-col items-center xs:mt-20"
      >
        <div>
          <Title text="About me" tag="h2" />
        </div>
        <div className="mt-4 flex flex-col-reverse items-start gap-8 sm:flex-row">
          <div className="flex flex-col gap-6 text-center text-base leading-relaxed text-white/90 sm:text-start">
            <p>
              Hey there! I&#39;m a 24-year-old web developer based in Aarhus
              with a strong passion for backend development.
            </p>
            <p>
              In the summer of 2024, I graduated as a Multimedia Designer
              specializing in frontend development from Business Academy Aarhus.
              Currently, I&#39;m furthering my studies with a PBA in Web
              Development at the same institution. Through this program,
              I&#39;ve discovered my deep interest in backend and system
              development, where I truly enjoy designing well-structured,
              scalable, and efficient systems.
            </p>
            <p>
              Alongside my studies, I&#39;ve been working as a web developer at
              Auxo since January 2024, gaining valuable hands-on experience in
              building and maintaining digital solutions.
            </p>
            <p>
              My background in frontend development has given me a strong
              understanding of the full development process, allowing me to
              create seamless integrations between frontend and backend. This
              has been a great advantage in my backend work, helping me develop
              more efficient and user-friendly systems.
            </p>
            <p>
              I&#39;m always eager to take on new challenges and continuously
              improve my skills. Right now, I&#39;m looking for an internship in
              fall 2025, where I can further develop my expertise in backend and
              web development. If you&#39;re looking for a motivated and
              dedicated developer to join your team, feel free to reach
              out—I&#39;m always open for a chat!
            </p>
          </div>
        </div>
        <div className="mt-4 flex w-full justify-center sm:justify-end">
          <Image
            src="/images/mads-aveo-profil.webp"
            alt="Mads Kristensen"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      </section>
      <ArrowButton
        orientation="up"
        url="#top"
        className="fixed bottom-5 right-5 z-50 xs:bottom-10 xs:right-10"
        showOnScroll={true}
      ></ArrowButton>
    </main>
  );
}
