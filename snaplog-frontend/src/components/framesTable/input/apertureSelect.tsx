import { Select } from "@/components/framesTable/input/input.styles";
import { Aperture } from "@/lib/model/aperture";
import { Frame } from "@/lib/model/frame";
import { useId } from "react";

export interface ApertureSelectProps {
  apertures: Aperture[];
  selectHandler: ({ aperture }: Partial<Frame>) => void;
  selectedAperture: Aperture;
  frame?: number;
}

const getApertureOrDefault = (
  selectedAperture: string,
  apertures: Aperture[]
): Aperture => {
  return (
    apertures.find((aperture) => aperture.key === selectedAperture) ??
    apertures[0]
  );
};

export function ApertureSelect({
  apertures,
  selectHandler,
  selectedAperture,
  frame,
}: ApertureSelectProps) {
  const selectId = useId();

  return (
    <>
      <label hidden htmlFor={selectId}>
        select aperture
      </label>
      <Select
        id={selectId}
        name={`aperture-select-${frame}`}
        value={selectedAperture.key}
        onChange={(e) =>
          selectHandler({
            aperture: getApertureOrDefault(e.target.value, apertures),
          })
        }
      >
        {apertures.map((aperture) => {
          return (
            <option value={aperture.key} key={`ap-${frame}-${aperture.key}`}>
              {aperture.label}
            </option>
          );
        })}
      </Select>
    </>
  );
}
