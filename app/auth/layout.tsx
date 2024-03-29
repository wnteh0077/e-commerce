import '../globals.css';
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/Container";

export const metadata : Metadata = {
  title: 'E-Commerce',
  description: 'Hi',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body>
          <Navbar/>
          <div>
              {children}
          </div>
        </body>
      </html>
    </>
  );
};
