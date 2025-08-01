import { FrameRow } from "@/components/framesTable/frameRow";
import { Table } from "@/components/framesTable/framesTable.styles";
import { FramesTableHeader } from "@/components/framesTable/framesTableHeader";
import { NewFrameRow } from "@/components/framesTable/newFrameRow";
import { Frame } from "@/lib/model/frame";

export interface FramesTableProps {
  frames: Frame[];
  changeHandler: (newFrames: Frame[]) => void;
}

export function FramesTable({ frames, changeHandler }: FramesTableProps) {
  const handleFrameChange = (newFrame: Frame, index: number) => {
    const newFrames = frames;
    newFrames[index] = newFrame;

    changeHandler(newFrames);
  };

  const handleNewFrame = (newFrame: Frame) => {
    frames.push(newFrame);

    changeHandler(frames);
  };

  return (
    <Table>
      <FramesTableHeader />
      <tbody>
        {frames.map((frame, index) => (
          <FrameRow key={index} count={index + 1} frame={frame} />
        ))}
        <NewFrameRow lastFrame={frames[frames.length - 1]} />
      </tbody>
    </Table>
  );
}
