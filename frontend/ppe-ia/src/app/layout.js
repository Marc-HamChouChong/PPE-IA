import "./globals.css";

import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full flex flex-col">
        <main className="flex-grow">
          <div className="flex flex-col w-full items-center mt-[10vh] mb-[10vh]">
            <div className="bg-white p-10 rounded-lg w-[80%]" style={{ backgroundColor: "var(--color1)" }}>
              <Header/>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
