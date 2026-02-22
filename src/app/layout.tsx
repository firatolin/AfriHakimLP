import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AfriHakim — AI-Powered Healthcare for Africa",
  description: "Connecting patients, doctors, hospitals, pharmacies, and labs in one intelligent ecosystem.",
  keywords: ["healthcare", "AI", "Africa", "telemedicine", "digital health"],
  openGraph: {
    title: "AfriHakim — AI-Powered Healthcare for Africa",
    description: "Connecting patients, doctors, hospitals, pharmacies, and labs in one intelligent ecosystem.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
