import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import siteCopy from "@/lib/site-copy.json";

export const metadata: Metadata = {
  title: siteCopy.meta.homeTitle,
  description: siteCopy.meta.homeDescription,
};

export default function Page() {
  return <HomePage />;
}
