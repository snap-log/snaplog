import { TDLeftBorder, TH } from "@/components/framesTable/framesTable.styles";
import { Frame } from "@/lib/model/frame";

export interface NewFrameRowProps {
  lastFrame?: Frame;
}

export function NewFrameRow({ lastFrame }: NewFrameRowProps) {
  return (
    <tr>
      <TH scope="row">+</TH>
      <TDLeftBorder>{lastFrame?.aperture.label ?? "aperture"}</TDLeftBorder>
      <TDLeftBorder>
        {lastFrame?.shutterSpeed.label ?? "shutter speed"}
      </TDLeftBorder>
      <TDLeftBorder></TDLeftBorder>
    </tr>
  );
}
