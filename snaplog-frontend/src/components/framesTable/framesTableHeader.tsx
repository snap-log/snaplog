import {
  TH,
  THLeftBorder,
  TRBottomBorder,
} from "@/components/framesTable/framesTable.styles";

export function FramesTableHeader() {
  return (
    <thead>
      <TRBottomBorder>
        <TH scope="col">#</TH>
        <THLeftBorder scope="col">Aperture</THLeftBorder>
        <THLeftBorder scope="col">Shutter Speed</THLeftBorder>
        <THLeftBorder scope="col">Notes</THLeftBorder>
      </TRBottomBorder>
    </thead>
  );
}
