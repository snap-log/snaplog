import { Film } from "@/lib/model/film";
import { Metadata } from "@/lib/model/metadata";

export const mockCamera = (override?: string) => {
  return override ?? "Nikon FM2";
};
export const mockLens = (override?: string) => {
  return override ?? "Nikon 50mm f1.8 Series E";
};
export const mockFilm = (): Film => {
  return {
    label: "Kodak Gold 200",
    iso: 200,
  };
};

export const mockMetaData = (): Metadata => {
  return {
    camera: mockCamera(),
    lens: mockLens(),
    film: mockFilm(),
  };
};
