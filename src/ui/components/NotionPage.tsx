"use client";

import Head from "next/head";
import { Fragment } from "react";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { Collection } from "react-notion-x/build/third-party/collection";

export const NotionPage = ({
  recordMap,
  rootPageId,
  components,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
  components?: any;
}) => {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <Fragment>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootPageId={rootPageId}
        components={{ Collection }}
      />
    </Fragment>
  );
};
