// components/emails/ContactEmailTemplate.tsx
// Rendered server-side by Resend. Keep it dependency-light (no Tailwind, no app imports).

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type Props = {
  fullName: string;
  email: string;
  projectType: string;
  message: string;
};

export function ContactEmailTemplate({ fullName, email, projectType, message }: Props) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New {projectType} inquiry from {fullName}</Preview>

      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>Quarcode</Text>
            <Text style={headerSub}>New Contact Form Submission</Text>
          </Section>

          {/* Sender meta */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Contact Details</Heading>
            <Row>
              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <MetaRow label="Name"         value={fullName}    />
                  <MetaRow label="Email"        value={email}       />
                  <MetaRow label="Project Type" value={projectType} />
                </tbody>
              </table>
            </Row>
          </Section>

          <Hr style={hr} />

          {/* Message body */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Message</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              This email was sent via the contact form on{" "}
              <a href="https://quarcode.dz" style={link}>quarcode.dz</a>.
              Reply directly to this email to respond to {fullName}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ── Small helper component ────────────────────────────────────────────────────

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={metaLabel}>{label}</td>
      <td style={metaValue}>{value}</td>
    </tr>
  );
}

// ── Inline styles (email clients ignore external CSS) ─────────────────────────

const body: React.CSSProperties = {
  backgroundColor: "#0f0f14",
  fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#1a1a24",
  border: "1px solid #2e2e3d",
  borderRadius: "12px",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden",
};

const header: React.CSSProperties = {
  background: "linear-gradient(135deg, #2e5bff 0%, #7c3aed 100%)",
  padding: "32px 40px 28px",
};

const logoText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "800",
  letterSpacing: "-0.5px",
  margin: "0 0 4px",
};

const headerSub: React.CSSProperties = {
  color: "rgba(255,255,255,0.75)",
  fontSize: "13px",
  fontWeight: "500",
  margin: 0,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const section: React.CSSProperties = {
  padding: "28px 40px",
};

const h2: React.CSSProperties = {
  color: "#e2e2f0",
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "0.06em",
  margin: "0 0 16px",
  textTransform: "uppercase",
};

const metaLabel: React.CSSProperties = {
  color: "#8888aa",
  fontSize: "13px",
  fontWeight: "500",
  paddingBottom: "10px",
  paddingRight: "16px",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  width: "110px",
};

const metaValue: React.CSSProperties = {
  color: "#d4d4f0",
  fontSize: "14px",
  paddingBottom: "10px",
  verticalAlign: "top",
};

const messageText: React.CSSProperties = {
  color: "#c8c8e8",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const hr: React.CSSProperties = {
  borderColor: "#2e2e3d",
  borderWidth: "1px",
  margin: "0 40px",
};

const footerSection: React.CSSProperties = {
  padding: "20px 40px 28px",
};

const footerText: React.CSSProperties = {
  color: "#55556a",
  fontSize: "12px",
  lineHeight: "1.6",
  margin: 0,
};

const link: React.CSSProperties = {
  color: "#2e5bff",
  textDecoration: "none",
};