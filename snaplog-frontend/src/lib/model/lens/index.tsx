import { Aperture } from "@/lib/model/aperture";

export interface Lens {
  label: string;
  apertures: Aperture[];
}
