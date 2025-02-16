import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page",
  keywords: ["contact", "page"],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Contact Page</span>
    </div>
  );
}
