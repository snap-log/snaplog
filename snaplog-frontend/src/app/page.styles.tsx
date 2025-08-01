import styled from "@emotion/styled";

export const Page = styled.div({
  display: "grid",
  gridTemplateRows: "20px 1fr 20px",
  alignItems: "center",
  justifyItems: "center",
  minHeight: "100svh",
  //padding: "80px",
  gap: "64px",
});

export const Header = styled.header({
  gridRowStart: 1,
  display: "flex",
  gap: "24px",
});

export const Main = styled.main({
  gridRowStart: 2,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const Footer = styled.footer({
  gridRowStart: 3,
  display: "flex",
  gap: "24px",
});
