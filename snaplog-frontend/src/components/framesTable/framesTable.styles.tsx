import { colours } from "@/lib/colours";
import styled from "@emotion/styled";

// TODO UNIVERSAL STYLING?
const borderColour = colours.background;
const standardBorder = `1px solid ${borderColour}`;

export const Table = styled.table({
  borderCollapse: "collapse",
});

export const TH = styled.th({
  padding: "0.25em 2em 0.25em 0.5em",
});

export const THLeftBorder = styled(TH)({
  borderLeft: standardBorder,
});

export const TD = styled.td({
  padding: "0.25em 2em 0.25em 0.5em",
});

export const TDLeftBorder = styled(TD)({
  borderLeft: standardBorder,
});

export const TRBottomBorder = styled.tr({
  borderBottom: standardBorder,
});
