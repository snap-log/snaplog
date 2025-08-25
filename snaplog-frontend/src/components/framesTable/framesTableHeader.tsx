import {
  THContent,
  THLeftBorder,
  TRBottomBorder,
} from "@/components/framesTable/framesTable.styles";

export function FramesTableHeader() {
  return (
    <thead>
      <TRBottomBorder>
        <th scope="col">
          <THContent>#</THContent>
        </th>
        <THLeftBorder scope="col">
          <THContent>Aperture</THContent>
        </THLeftBorder>
        <THLeftBorder scope="col">
          <THContent>Shutter Speed</THContent>
        </THLeftBorder>
        <THLeftBorder>
          <THContent>EV</THContent>
        </THLeftBorder>
        <THLeftBorder scope="col">
          <THContent>Notes</THContent>
        </THLeftBorder>
      </TRBottomBorder>
    </thead>
  );
}
