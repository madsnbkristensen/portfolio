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

interface MediaGalleryProps {
  mediaItems: MediaItem[];
}

export default function MediaGallery({ mediaItems }: MediaGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem>(mediaItems[0]);

  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col-reverse gap-4 rounded-lg py-6 sm:flex-row">
      {/* Thumbnails */}
      <div className="flex h-12 w-1/3 flex-row gap-4 sm:h-full sm:w-1/4 sm:flex-col">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={cn(
              "relative aspect-video h-full w-full cursor-pointer transition-opacity hover:opacity-80",
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
