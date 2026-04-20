import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import { profile_data } from "../project_data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${profile_data.name} - ${profile_data.role}`,
  description: profile_data.shortIntro,
  keywords: [
    profile_data.name,
    `${profile_data.name} portfolio`,
    profile_data.role,
    "frontend developer",
    "web portfolio",
  ],
  authors: [{ name: profile_data.name }],
  creator: profile_data.name,
  publisher: profile_data.name,
  category: "technology",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: profile_data.name,
    description: profile_data.shortIntro,
    url: "https://example.com",
    siteName: profile_data.name,
    images: [
      {
        url: profile_data.profileImage,
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile_data.name,
    description: profile_data.shortIntro,
    images: [profile_data.profileImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
