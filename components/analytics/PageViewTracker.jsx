"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "./track";

/** Records a page_view for every navigation. */
export default function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) track("page_view");
  }, [pathname]);
  return null;
}
