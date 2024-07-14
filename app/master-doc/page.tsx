import MasterDocComponent from "@/components/master-doc";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Relevant Links", //potentially edit
  description: "Master Doc PearAI", //potentially edit
  canonical: "/master-doc", //potentially edit
});

export default function MasterDoc() {
  return (
    <>
      <MasterDocComponent />
    </>
  );
}
