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
            {/* Logo mark */}
            <table cellPadding={0} cellSpacing={0} style={{ marginBottom: "14px" }}>
              <tbody>
                <tr>
                  <td style={logoMark}>&lt;/&gt;</td>
                  <td style={{ paddingLeft: "10px", verticalAlign: "middle" }}>
                    <Text style={logoText}>Quarcode</Text>
                  </td>
                </tr>
              </tbody>
            </table>
            <Text style={headerSub}>New contact form submission</Text>
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
            <div style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              This email was sent via the contact form on{" "}
              <a href="https://quarcode.dz" style={link}>quarcode.dz</a>.
              Reply directly to respond to {fullName}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ── Helper ────────────────────────────────────────────────────────────────────

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={metaLabel}>{label}</td>
      <td style={metaValue}>{value}</td>
    </tr>
  );
}

// ── Inline styles ─────────────────────────────────────────────────────────────

const body: React.CSSProperties = {
  backgroundColor: "#07080f",
  fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "48px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#0e0f1a",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "16px",
  margin: "0 auto",
  maxWidth: "580px",
  overflow: "hidden",
};

const header: React.CSSProperties = {
  background: "linear-gradient(135deg, #4f6eff 0%, #8b5cf6 100%)",
  padding: "28px 36px 24px",
};

const logoMark: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.15)",
  borderRadius: "7px",
  color: "#ffffff",
  fontFamily: "'Courier New', monospace",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "-1px",
  padding: "4px 7px",
  verticalAlign: "middle",
};

const logoText: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "800",
  letterSpacing: "-0.4px",
  margin: 0,
  verticalAlign: "middle",
};

const headerSub: React.CSSProperties = {
  color: "rgba(255,255,255,0.65)",
  fontFamily: "'Courier New', monospace",
  fontSize: "11px",
  fontWeight: "500",
  letterSpacing: "0.1em",
  margin: 0,
  textTransform: "uppercase",
};

const section: React.CSSProperties = {
  padding: "28px 36px",
};

const h2: React.CSSProperties = {
  color: "#4f6eff",
  fontFamily: "'Courier New', monospace",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.12em",
  margin: "0 0 16px",
  textTransform: "uppercase",
};

const metaLabel: React.CSSProperties = {
  color: "#4b4c6a",
  fontFamily: "'Courier New', monospace",
  fontSize: "12px",
  fontWeight: "500",
  paddingBottom: "10px",
  paddingRight: "20px",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  width: "110px",
};

const metaValue: React.CSSProperties = {
  color: "#f0f1ff",
  fontSize: "14px",
  fontWeight: "500",
  paddingBottom: "10px",
  verticalAlign: "top",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "#13141f",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "10px",
  padding: "16px 20px",
};

const messageText: React.CSSProperties = {
  color: "#8889a8",
  fontSize: "14px",
  lineHeight: "1.75",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const hr: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.06)",
  borderWidth: "1px",
  margin: "0 36px",
};

const footerSection: React.CSSProperties = {
  padding: "18px 36px 26px",
};

const footerText: React.CSSProperties = {
  color: "#4b4c6a",
  fontFamily: "'Courier New', monospace",
  fontSize: "11px",
  lineHeight: "1.6",
  margin: 0,
};

const link: React.CSSProperties = {
  color: "#4f6eff",
  textDecoration: "none",
};