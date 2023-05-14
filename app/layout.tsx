import "./globals.css";
import { MyThemeContextProvider } from "./context/themeContext";
import AuthProvider from "./components/authProvider";

export const metadata = {
  title: "Tahaqoq",
  description: "Tahaqoq Vehicle Inspection Center",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        <MyThemeContextProvider>
          <AuthProvider>{children}</AuthProvider>
        </MyThemeContextProvider>
      </body>
    </html>
  );
}
