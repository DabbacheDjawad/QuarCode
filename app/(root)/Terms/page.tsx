// app/terms-of-service/page.tsx
import type { Metadata } from "next";
import TermsOfServiceClient from "@/components/TermsOfService/TermsOfServiceClient";

export const metadata: Metadata = {
  title: "Terms of Service | Quarcode",
  description:
    "Terms and conditions governing the use of Quarcode's website and professional services.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}