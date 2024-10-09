import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Portfolio: Shoon Laat | Frontend Developer",
  description: "Welcome to my portfolio! I am a dedicated Frontend Developer with a passion for creating engaging and user-friendly web applications. With expertise in technologies like React, Next.js, and Sass, I strive to deliver seamless user experiences through intuitive design and performance optimization. Explore my projects to see how I blend creativity with technical skills to bring ideas to life. Thank you for visiting!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
