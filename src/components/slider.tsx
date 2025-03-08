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
    //{ src: "/logos/c-sharp.svg", title: "C#" },
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
    <div className="mx-auto w-full max-w-3xl py-8">
      <div className="container mx-auto overflow-hidden rounded-md">
        <div className="flex flex-col">
          <Carousel
            setApi={setApi}
            autoScrollOptions={{ speed: 1 }}
            className="m-auto w-10/12 md:w-full"
          >
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem
                  className="basis-1/3 sm:basis-1/4 md:basis-1/6"
                  key={index}
                >
                  <div className="relative flex aspect-square h-20 w-20 items-center justify-center rounded-md bg-muted bg-slate-700 p-6 xs:h-28 xs:w-28 md:h-24 md:w-24">
                    <Image
                      src={logo.src}
                      alt={logo.title}
                      width={100}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <div className="rounded-lg bg-white px-2 py-1">
                        <h3 className="md:text-md text-center text-xs font-bold text-black">
                          {logo.title}
                        </h3>
                      </div>
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
