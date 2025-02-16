import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing Page",
  keywords: ["pricing", "page"],
};

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Pricing Page</span>
    </div>
  );
}
