import { Metadata as MetadataModel } from "@/lib/model/metadata";
import styled from "@emotion/styled";

export interface MetadataProps {
  metadata: MetadataModel;
  changeHandler: (newMetadata: MetadataModel) => void;
}

const CameraFilmContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
});

const LensDiv = styled.div({
  padding: "0.5em 0.5em 0.5em 0em",
});

export function Metadata({ metadata }: MetadataProps) {
  return (
    <>
      <CameraFilmContainer>
        <div>📷 : {metadata.camera.label}</div>
        <div>🎞️ : {metadata.film.label}</div>
      </CameraFilmContainer>
      <LensDiv>🔍 : {metadata.lens.label}</LensDiv>
    </>
  );
}
