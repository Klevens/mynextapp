import Link from "next/link";
import Navbar from './Navbar'

export const metadata = {
  title: "Next Kelvin - HomePage",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar/>
        {children}
      </body>
    </html>
  );
}
