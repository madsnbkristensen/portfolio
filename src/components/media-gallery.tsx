"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt?: string;
}

export default function MediaGallery() {
  // Sample media items - replace with your actual media sources
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      src: "/images/adg-2.webp",
      alt: "Sample image 1",
    },
    {
      id: 2,
      type: "image",
      src: "/images/mads-aveo-img.webp",
    },
    {
      id: 3,
      type: "image",
      src: "/images/adg-card-image.webp",
      alt: "Sample image 2",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<MediaItem>(mediaItems[0]);

  return (
    <div className="flex gap-4 p-6 rounded-lg max-w-5xl mx-auto">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4 w-1/4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={cn(
              "relative aspect-video cursor-pointer transition-opacity hover:opacity-80",
              selectedItem.id === item.id ? "ring-2 ring-primary" : "opacity-70"
            )}
          >
            {item.type === "image" ? (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt || ""}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Display */}
      <div className="relative flex-1 aspect-[16/9]">
        {selectedItem.type === "image" ? (
          <Image
            src={selectedItem.src || "/placeholder.svg"}
            alt={selectedItem.alt || ""}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={selectedItem.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
}
