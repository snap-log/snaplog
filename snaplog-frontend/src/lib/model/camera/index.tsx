import { ShutterSpeed } from "@/lib/model/shutterSpeed";

export interface Camera {
  label: string;
  shutterSpeeds: ShutterSpeed[];
}
