import { Aperture } from "@/lib/model/aperture";
import { ShutterSpeed } from "@/lib/model/shutterSpeed";

// https://en.wikipedia.org/wiki/Exposure_value
// EV = log_2((N^2) / t)
// where
// N - f number
// t - exposure time (ie shutter speed in seconds)

export function ev(aperture: Aperture, shutterSpeed: ShutterSpeed) {
  return Math.log2(
    (aperture.fNumber * aperture.fNumber) / shutterSpeed.duration
  );
}
