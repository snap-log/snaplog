import {
  TDLeftBorder,
  NewFrameButton,
  NewFrameText,
} from "@/components/framesTable/framesTable.styles";
import { list, newAperture } from "@/lib/model/aperture";
import { ev } from "@/lib/model/ev";
import { Frame } from "@/lib/model/frame";
import { newShutterSpeed } from "@/lib/model/shutterSpeed";

export interface NewFrameRowProps {
  newFrameHandler: (newFrame: Frame) => void;
  lastFrame?: Frame;
}

const defaultFrame: Frame = {
  aperture: newAperture(1.8),
  shutterSpeed: newShutterSpeed(60, true),
};

export function NewFrameRow({ newFrameHandler, lastFrame }: NewFrameRowProps) {
  const frame = lastFrame ? { ...lastFrame, notes: "" } : defaultFrame;

  return (
    <tr>
      <th scope="row">
        <NewFrameButton
          onClick={() => {
            newFrameHandler(frame);
          }}
        >
          +
        </NewFrameButton>
      </th>
      <TDLeftBorder>
        <NewFrameText>{frame?.aperture.label ?? "aperture"}</NewFrameText>
      </TDLeftBorder>
      <TDLeftBorder>
        <NewFrameText>
          {frame?.shutterSpeed.label ?? "shutter speed"}
        </NewFrameText>
      </TDLeftBorder>
      <TDLeftBorder>
        <NewFrameText>
          {lastFrame
            ? Math.round(ev(lastFrame.aperture, lastFrame.shutterSpeed))
            : ""}
        </NewFrameText>
      </TDLeftBorder>
      <TDLeftBorder></TDLeftBorder>
    </tr>
  );
}
