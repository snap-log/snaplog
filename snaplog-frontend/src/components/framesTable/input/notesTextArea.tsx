import { TextArea } from "@/components/framesTable/input/input.styles";
import { Frame } from "@/lib/model/frame";
import { useId, useState } from "react";

export interface NotesInputProps {
  changeHandler: ({ notes }: Partial<Frame>) => void;
  notes: string;
}

export const NotesTextArea = ({ changeHandler, notes }: NotesInputProps) => {
  const cols = 20;
  const rows = notes === "" ? 1 : Math.ceil(notes.length / cols);
  const inputId = useId();

  return (
    <>
      <label hidden htmlFor={inputId}>
        notes
      </label>
      <TextArea
        id={inputId}
        value={notes}
        rows={rows}
        onChange={(e) => changeHandler({ notes: e.target.value })}
      />
    </>
  );
};
