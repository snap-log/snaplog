import { colours } from "@/lib/colours";
import styled from "@emotion/styled";

// TODO UNIVERSAL STYLING?
const borderColour = colours.background;
const standardBorder = `1px solid ${borderColour}`;

export const Table = styled.table({
  borderCollapse: "collapse",
});

export const THContent = styled.div({
  padding: "0.25em 0.5em 0.25em 0.5em",
});

export const THLeftBorder = styled.th({
  borderLeft: standardBorder,
});

export const TD = styled.td({
  padding: "0.25em 0.5em 0.25em 0.5em",
});

export const TDLeftBorder = styled(TD)({
  borderLeft: standardBorder,
});

export const TRBottomBorder = styled.tr({
  borderBottom: standardBorder,
});

export const NewFrameButton = styled.button({
  padding: "0.25em 0.5em 0.25em 0.5em",
  background: "none",
  border: "none",
  cursor: "pointer",
  textAlign: "center",
});

export const NewFrameText = styled.div({
  color: "grey",
});
