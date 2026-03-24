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
  title: "Mindsheep Labs | AI-Driven Marketing",
  description: "Combining proven marketing funnels with cutting-edge AI.",
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
