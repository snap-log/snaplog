import { Aperture } from "@/lib/model/aperture";
import { Metadata } from "@/lib/model/metadata";
import { ShutterSpeed } from "@/lib/model/shutterSpeed";

export interface Frame {
  metadata: Metadata;
  aperture: Aperture;
  shutterSpeed: ShutterSpeed;
  notes?: string;
}
