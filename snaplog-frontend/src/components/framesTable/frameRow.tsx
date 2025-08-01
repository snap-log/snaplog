import {
  TDLeftBorder,
  TH,
  TRBottomBorder,
} from "@/components/framesTable/framesTable.styles";
import { Frame } from "@/lib/model/frame";

export interface FrameRowProps {
  count: number;
  frame: Frame;
}

export function FrameRow({ count, frame }: FrameRowProps) {
  return (
    <TRBottomBorder>
      <TH scope="row">{count}</TH>
      <TDLeftBorder>{frame.aperture.label}</TDLeftBorder>
      <TDLeftBorder>{frame.shutterSpeed.label}</TDLeftBorder>
      <TDLeftBorder>{frame.notes}</TDLeftBorder>
    </TRBottomBorder>
  );
}
