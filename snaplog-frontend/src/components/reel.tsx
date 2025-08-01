import { FramesTable } from "@/components/framesTable/framesTable";
import { Metadata } from "@/components/metadata";
import { Frame } from "@/lib/model/frame";
import { Metadata as MetadataModel } from "@/lib/model/metadata";
import { Reel as ReelModel } from "@/lib/model/reel";
import React, { useState } from "react";

interface ReelProps {
  reel: ReelModel;
}

export function Reel({ reel: initialReel }: ReelProps) {
  const [reel, setReel] = useState(initialReel);

  const metadataChangeHandler = (newMetadata: MetadataModel) => {
    setReel({ ...reel, metadata: newMetadata });
  };

  const framesChangeHandler = (newFrames: Frame[]) => {
    setReel({ ...reel, frames: newFrames });
  };

  return (
    <div>
      <Metadata
        metadata={reel.metadata}
        changeHandler={metadataChangeHandler}
      />
      <FramesTable frames={reel.frames} changeHandler={framesChangeHandler} />
    </div>
  );
}
