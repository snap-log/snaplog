"use client";

import { Reel } from "@/components/reel";
import { Footer, Header, Main, Page } from "./page.styles";
import { newReel } from "@/lib/model/reel";
import { mockMetaData } from "@/lib/mock/mock";

export default function Home() {
  return (
    <Page>
      <Header>header</Header>
      <Main>
        <Reel reel={newReel(mockMetaData())} />
      </Main>
      <Footer>footer</Footer>
    </Page>
  );
}
