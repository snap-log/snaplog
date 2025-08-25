import {
  TDLeftBorder,
  THContent,
  TRBottomBorder,
} from "@/components/framesTable/framesTable.styles";
import { ApertureSelect } from "@/components/framesTable/input/apertureSelect";
import { NotesTextArea } from "@/components/framesTable/input/notesTextArea";
import { ShutterSpeedSelect } from "@/components/framesTable/input/speedSelect";
import { Aperture } from "@/lib/model/aperture";
import { ev } from "@/lib/model/ev";
import { Frame } from "@/lib/model/frame";
import { ShutterSpeed } from "@/lib/model/shutterSpeed";

export interface FrameRowProps {
  changeHandler: (newFrame: Frame) => void;
  shutterSpeeds: ShutterSpeed[];
  apertures: Aperture[];
  count: number;
  frame: Frame;
}

export function FrameRow({
  changeHandler,
  shutterSpeeds,
  apertures,
  count,
  frame,
}: FrameRowProps) {
  const handleChange = (change: Partial<Frame>) => {
    const newFrame: Frame = {
      ...frame,
      ...change,
    };

    changeHandler(newFrame);
  };

  return (
    <TRBottomBorder>
      <th scope="row">
        <THContent>{count}</THContent>
      </th>
      <TDLeftBorder>
        <ApertureSelect
          selectHandler={handleChange}
          apertures={apertures}
          selectedAperture={frame.aperture}
        />
      </TDLeftBorder>
      <TDLeftBorder>
        <ShutterSpeedSelect
          selectHandler={handleChange}
          shutterSpeeds={shutterSpeeds}
          selectedShutterSpeed={frame.shutterSpeed}
        />
      </TDLeftBorder>
      <TDLeftBorder>
        {Math.round(ev(frame.aperture, frame.shutterSpeed))}
      </TDLeftBorder>
      <TDLeftBorder>
        <NotesTextArea changeHandler={handleChange} notes={frame.notes ?? ""} />
      </TDLeftBorder>
    </TRBottomBorder>
  );
}
