import Title from "../components/title";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-40">
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div>
          <div>
            <Title text="Mads Kristensen" tag="h1" />
            <p className="text-white text-xl">
              - Web developer with a passion for backend and system development
            </p>
          </div>
          <div className="flex justify-between gap-4 mt-8">
            <Button className="bg-slate-700 hover:bg-slate-800">
              My skills
            </Button>
            <Button variant="outline" className="hover:h-11 hover:w-24">
              Contact
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/images/mads-aveo-img.webp"
            alt="Mads Kristensen"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
