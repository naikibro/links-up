import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link's up",
  description: "The flexible social media platform for content creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
