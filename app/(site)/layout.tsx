import Header from "../components/header";
import Footer from "../components/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} flex flex-col min-h-screen bg-[url('/grid.svg')] font-inter `}
    >
      <Header />
      <main className="flex flex-col w-full px-8 mx-auto md:max-w-6xl grow font-inter">
        {children}
      </main>
      <Footer />
    </div>
  );
}
