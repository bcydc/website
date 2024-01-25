import * as React from "react";

import notion from "@/app/(notion)/notion";
import { SPONSORS } from "@/app/(notion)/pages";
import { NotionPage } from "@/ui/components/NotionPage";

export default async function Sponsors() {
  const recordMap = await notion.getPage(SPONSORS);
  return <NotionPage recordMap={recordMap} rootPageId={SPONSORS} />;
}
