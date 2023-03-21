import "./globals.css";
import { AnalyticsWrapper } from "./components/analytics";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ backgroundColor: "black" }}>
        <div className="wrapper">
          {children}
          <AnalyticsWrapper />
        </div>
        <footer className="footer" style={{ backgroundColor: "#1A2B48" }}>
          <p style={{ color: "white" }}>Hinterscapes</p>
        </footer>
      </body>
    </html>
  );
}
