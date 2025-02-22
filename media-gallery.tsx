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
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sample image 1",
    },
    {
      id: 2,
      type: "video",
      src: "https://example.com/sample-video.mp4",
    },
    {
      id: 3,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sample image 2",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<MediaItem>(mediaItems[0]);

  return (
    <div className="mx-auto flex max-w-5xl gap-4 rounded-lg bg-black p-6">
      {/* Thumbnails */}
      <div className="flex w-1/4 flex-col gap-4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={cn(
              "relative aspect-video cursor-pointer transition-opacity hover:opacity-80",
              selectedItem.id === item.id
                ? "ring-2 ring-primary"
                : "opacity-70",
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
                className="h-full w-full object-cover"
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Display */}
      <div className="relative aspect-[16/9] flex-1">
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
            className="h-full w-full object-cover"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
}
