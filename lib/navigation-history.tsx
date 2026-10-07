"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// True once the user has moved between pages inside the app, i.e. router.back() stays in the app.
let hasInAppHistory = false;

export function canGoBackInApp() {
  return hasInAppHistory;
}

/** Mounted once in the root layout to notice client-side navigations. */
export function NavigationTracker() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    hasInAppHistory = true;
  }, [pathname]);

  return null;
}
