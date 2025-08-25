import { Frame } from "@/lib/model/frame";
import { Metadata } from "@/lib/model/metadata";

export interface Reel {
  metadata: Metadata;
  frames: Frame[];
}

export const newReel = (metadata: Metadata): Reel => {
  return {
    metadata,
    frames: [
      {
        metadata: metadata,
        aperture: metadata.lens.apertures[0],
        shutterSpeed: metadata.camera.shutterSpeeds[0],
      },
    ],
  };
};
