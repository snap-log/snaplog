import { Aperture } from "@/lib/model/aperture";
import { ShutterSpeed } from "@/lib/model/shutterSpeed";

export interface Frame {
  aperture: Aperture;
  shutterSpeed: ShutterSpeed;
  notes?: string;
}
