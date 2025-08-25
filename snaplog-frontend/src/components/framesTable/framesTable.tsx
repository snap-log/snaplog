import { FrameRow } from "@/components/framesTable/frameRow";
import { Table } from "@/components/framesTable/framesTable.styles";
import { FramesTableHeader } from "@/components/framesTable/framesTableHeader";
import { NewFrameRow } from "@/components/framesTable/newFrameRow";
import { Aperture } from "@/lib/model/aperture";
import { Frame } from "@/lib/model/frame";
import { ShutterSpeed } from "@/lib/model/shutterSpeed";

export interface FramesTableProps {
  changeHandler: (newFrames: Frame[]) => void;
  shutterSpeeds: ShutterSpeed[];
  apertures: Aperture[];
  frames: Frame[];
}

export function FramesTable({
  changeHandler,
  shutterSpeeds,
  apertures,
  frames,
}: FramesTableProps) {
  const generateFrameChangeHandler = (index: number) => {
    return (newFrame: Frame) => {
      const newFrames = frames;
      newFrames[index] = newFrame;

      changeHandler(newFrames);
    };
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
          <FrameRow
            key={index}
            changeHandler={generateFrameChangeHandler(index)}
            apertures={apertures}
            shutterSpeeds={shutterSpeeds}
            count={index + 1}
            frame={frame}
          />
        ))}
        <NewFrameRow
          newFrameHandler={handleNewFrame}
          lastFrame={frames[frames.length - 1]}
        />
      </tbody>
    </Table>
  );
}
