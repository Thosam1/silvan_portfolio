"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import {HSCopyMarkup as HSStaticMethods} from "preline";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
        HSStaticMethods.autoInit();
    }, 100);
  }, [path]);

  return null;
}