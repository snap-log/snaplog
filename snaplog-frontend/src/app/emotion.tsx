"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { JSX } from "@emotion/react/jsx-runtime";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// based on
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1293012737

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
