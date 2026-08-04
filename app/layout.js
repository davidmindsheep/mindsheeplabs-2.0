import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mindsheep.com.au"),
  title: {
    default: "Mindsheep Marketing | AI Lead Generation",
    template: "%s | Mindsheep Marketing",
  },
  description:
    "Stop collecting form fills. AI that chats, qualifies and quotes instantly — so your team only gets the leads worth their time, and your ads learn to find more of them.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Mindsheep Marketing",
    title: "Mindsheep Marketing | AI Lead Generation",
    description:
      "More leads. Better leads. Less time chasing them. AI lead generation done properly.",
    url: "https://mindsheep.com.au",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We apply the Inter className directly to the body to ensure it becomes the default font, 
          while injecting both fonts as CSS variables for custom usage in globals.css */}
      <body className={`${inter.className} ${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
