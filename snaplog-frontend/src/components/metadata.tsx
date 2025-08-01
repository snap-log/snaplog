import { Metadata as MetadataModel } from "@/lib/model/metadata";
import styled from "@emotion/styled";

export interface MetadataProps {
  metadata: MetadataModel;
  changeHandler: (newMetadata: MetadataModel) => void;
}

const MetadataContainer = styled.div({
  display: "grid",
});

export function Metadata({ metadata }: MetadataProps) {
  return (
    <MetadataContainer>
      <div>📷 : {metadata.camera}</div>
      <div>🔍 : {metadata.lens}</div>
      <div>🎞️ : {metadata.film.label}</div>
    </MetadataContainer>
  );
}
