import { list, newAperture } from "@/lib/model/aperture";
import { Frame } from "@/lib/model/frame";
import { Metadata } from "@/lib/model/metadata";
import { newShutterSpeed } from "@/lib/model/shutterSpeed";

export interface Reel {
  metadata: Metadata;
  frames: Frame[];
}

export const newReel = (metadata: Metadata): Reel => {
  return {
    metadata,
    frames: [
      { aperture: newAperture(1.8), shutterSpeed: newShutterSpeed(60, true) },
    ],
  };
};
