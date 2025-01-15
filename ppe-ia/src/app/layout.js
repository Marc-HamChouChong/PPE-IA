import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
