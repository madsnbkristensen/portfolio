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

export default function DarkAccordion({
  accordionData,
}: {
  accordionData: AccordionData[];
}) {
  return (
    <div className="w-72">
      <Accordion type="single" collapsible className="space-y-2">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-b-2 border-white bg-transparent px-2"
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
