"use client";
import { useMemo } from "react";

const brands = {
  "mindsheeplabs.com": {
    name: "mindsheep labs",
    nameCaps: "Mindsheep Labs",
    legal: "Mindsheep Labs Global",
    tagline: "AI-powered marketing that moves faster than your competition.",
  },
  "mindsheep.com.au": {
    name: "mindsheep labs",
    nameCaps: "Mindsheep Labs",
    legal: "Mindsheep Labs Australia",
    tagline: "AI-powered marketing that moves faster than your competition.",
  },
};

const defaultBrand = brands["mindsheep.com.au"];

export default function useBrand() {
  return useMemo(() => {
    if (typeof window === "undefined") return defaultBrand;
    const host = window.location.hostname.replace(/^www\./, "");
    return brands[host] || defaultBrand;
  }, []);
}
