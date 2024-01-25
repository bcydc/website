import * as React from "react";

import notion from "@/app/(notion)/notion";
import { EVENTS } from "@/app/(notion)/pages";
import { NotionPage } from "@/ui/components/NotionPage";

export default async function Events() {
  const recordMap = await notion.getPage(EVENTS);
  return <NotionPage recordMap={recordMap} rootPageId={EVENTS} />;
}
