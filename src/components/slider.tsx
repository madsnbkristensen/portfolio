"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Slider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        setCurrent(current + 1);
        api.scrollNext();
      }
    }, 2000);
  }, [api, current]);

  const logos = [
    { src: "/logos/c-sharp.svg", title: "C#" },
    { src: "/logos/node.svg", title: "Node.js" },
    { src: "/logos/next.svg", title: "Next.js" },
    { src: "/logos/php.svg", title: "PHP" },
    { src: "/logos/js.svg", title: "JavaScript" },
    { src: "/logos/git.svg", title: "Git" },
    { src: "/logos/mysql.svg", title: "MySQL" },
    { src: "/logos/react.svg", title: "React" },
    { src: "/logos/ts.svg", title: "TypeScript" },
    { src: "/logos/mongodb.svg", title: "MongoDB" },
  ];

  return (
    <div className="w-[80%] py-8 mx-auto max-w-3xl">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="relative flex h-18 w-18 rounded-md bg-slate-700 aspect-square bg-muted items-center justify-center p-6">
                    <Image
                      src={logo.src}
                      alt={logo.title}
                      width={100}
                      height={100}
                      className="object-contain h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 rounded-md flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-center font-bold">
                        {logo.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
