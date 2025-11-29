"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AnalyticsEffects() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("utm_source")) {
      const utm_source = searchParams.get("utm_source");
      localStorage.setItem("utm_source", utm_source);
    }
    if (searchParams.get("utm_medium")) {
      const utm_medium = searchParams.get("utm_medium");
      localStorage.setItem("utm_medium", utm_medium);
    }
    if (searchParams.get("utm_term")) {
      const utm_term = searchParams.get("utm_term");
      localStorage.setItem("utm_term", utm_term);
    }
  }, [searchParams]);
  return <></>;
}
