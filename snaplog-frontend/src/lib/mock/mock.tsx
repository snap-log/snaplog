import { Aperture, list as apertureList } from "@/lib/model/aperture";
import { Camera } from "@/lib/model/camera";
import { Film } from "@/lib/model/film";
import { Lens } from "@/lib/model/lens";
import { Metadata } from "@/lib/model/metadata";
import {
  ShutterSpeed,
  list as shutterSpeedList,
} from "@/lib/model/shutterSpeed";

export const mockShutterSpeeds = (override?: ShutterSpeed[]) => {
  return override ?? shutterSpeedList;
};

export const mockCamera = (overrides?: Partial<Camera>): Camera => {
  return {
    label: "Nikon FM2",
    shutterSpeeds: shutterSpeedList,
    ...overrides,
  };
};

export const mockApertures = (override?: Aperture[]): Aperture[] => {
  return override ?? apertureList;
};

export const mockLens = (overrides?: Partial<Lens>): Lens => {
  return {
    label: "Nikon 50mm f1.8 Series E",
    apertures: mockApertures(),
    ...overrides,
  };
};

export const mockFilm = (overrides?: Partial<Film>): Film => {
  return {
    label: "Kodak Gold 200",
    iso: 200,
    ...overrides,
  };
};

export const mockMetaData = (): Metadata => {
  return {
    camera: mockCamera(),
    lens: mockLens(),
    film: mockFilm(),
  };
};
