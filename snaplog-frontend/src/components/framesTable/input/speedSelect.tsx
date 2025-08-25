import { Select } from "@/components/framesTable/input/input.styles";
import { Frame } from "@/lib/model/frame";
import { ShutterSpeed } from "@/lib/model/shutterSpeed";
import { useId } from "react";

export interface ShutterSpeedSelectProps {
  shutterSpeeds: ShutterSpeed[];
  selectHandler: ({ shutterSpeed }: Partial<Frame>) => void;
  selectedShutterSpeed: ShutterSpeed;
  frame?: number;
}

const getShutterSpeedOrDefault = (
  selectedSpeed: string,
  shutterSpeeds: ShutterSpeed[]
): ShutterSpeed => {
  console.log(selectedSpeed);
  return (
    shutterSpeeds.find((shutterSpeed) => shutterSpeed.key === selectedSpeed) ??
    shutterSpeeds[0]
  );
};

export function ShutterSpeedSelect({
  shutterSpeeds,
  selectHandler,
  selectedShutterSpeed,
  frame,
}: ShutterSpeedSelectProps) {
  const selectId = useId();

  return (
    <>
      <label hidden htmlFor={selectId}>
        select shutter speed
      </label>
      <Select
        id={selectId}
        name={`shutterspeed-select-${frame}`}
        value={selectedShutterSpeed.key}
        onChange={(e) =>
          selectHandler({
            shutterSpeed: getShutterSpeedOrDefault(
              e.target.value,
              shutterSpeeds
            ),
          })
        }
      >
        {shutterSpeeds.map((shutterSpeed) => {
          return (
            <option
              value={shutterSpeed.key}
              key={`ss-${frame}-${shutterSpeed.key}`}
            >
              {shutterSpeed.label}
            </option>
          );
        })}
      </Select>
    </>
  );
}
