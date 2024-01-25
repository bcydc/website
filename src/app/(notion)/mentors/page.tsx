import * as React from "react";

import notion from "@/app/(notion)/notion";
import { MENTORS } from "@/app/(notion)/pages";
import { NotionPage } from "@/ui/components/NotionPage";

export default async function Mentors() {
  const recordMap = await notion.getPage(MENTORS);
  return <NotionPage recordMap={recordMap} rootPageId={MENTORS} />;
}
