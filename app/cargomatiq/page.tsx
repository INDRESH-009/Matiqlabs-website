import type { Metadata } from "next";
import { CargoMatiqPage } from "@/components/CargoMatiqPage";
import siteCopy from "@/lib/site-copy.json";

export const metadata: Metadata = {
  title: siteCopy.meta.cargoTitle,
  description: siteCopy.meta.cargoDescription,
};

export default function Page() {
  return <CargoMatiqPage />;
}
