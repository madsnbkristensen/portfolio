"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  id: string;
  title: string;
  content: string;
}

const accordionData: AccordionData[] = [
  {
    id: "php",
    title: "PHP",
    content:
      "PHP is a popular general-purpose scripting language that is especially suited to web development.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    content:
      "JavaScript is a programming language that is one of the core technologies of the World Wide Web.",
  },
  {
    id: "wordpress",
    title: "Wordpress",
    content:
      "WordPress is a free and open-source content management system written in PHP.",
  },
];

export default function DarkAccordion() {
  return (
    <div className="w-full max-w-[300px] p-4">
      <Accordion type="single" collapsible className="space-y-2">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-white/20 bg-transparent px-2"
          >
            <AccordionTrigger className="text-white hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
