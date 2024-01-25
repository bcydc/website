import * as React from "react";

import notion from "@/app/(notion)/notion";
import { CLUBS } from "@/app/(notion)/pages";
import { NotionPage } from "@/ui/components/NotionPage";

export default async function Clubs() {
  const recordMap = await notion.getPage(CLUBS);
  return <NotionPage recordMap={recordMap} rootPageId={CLUBS} />;
}
