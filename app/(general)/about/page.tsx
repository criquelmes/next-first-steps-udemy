import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ["about", "page"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">About Page</span>
    </div>
  );
}
