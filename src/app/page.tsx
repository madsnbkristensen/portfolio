import Title from "../components/title";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "@/components/slider";

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
    </main>
  );
}
