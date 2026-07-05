// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import PrivacyPolicyClient from "@/components/PrivacyPolicy/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Quarcode",
  description: "How Quarcode collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}