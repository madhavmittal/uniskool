import "./globals.css"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Uniforms Global",
  description: "Your one-stop store for school uniforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logos/favicon.webp" />
        <title>Uniforms Global</title>
        <meta name="description" content="Your one-stop store for school uniforms." />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
