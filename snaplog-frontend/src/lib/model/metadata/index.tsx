import { Camera } from "@/lib/model/camera";
import { Film } from "@/lib/model/film";
import { Lens } from "@/lib/model/lens";

// TODO
// camera / film is static per reel
// lens isn't so should be mutable

export interface Metadata {
  camera: Camera;
  lens: Lens;
  film: Film;
}
