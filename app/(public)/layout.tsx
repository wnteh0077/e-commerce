import '../globals.css';
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/Container";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body>
          <Navbar />
          <div>
            <Container>
              {children}
            </Container>
          </div>
        </body>
      </html>
    </>
  );
};
