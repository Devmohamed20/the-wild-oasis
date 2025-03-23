import "@/app/_styles/globalstyles.css";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s | the wild oasis",
    default: "The wild oasis",
  },
};

const jose_fin = Josefin_Sans({ subsets: ["latin"], display: "swap" });
console.log(jose_fin);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jose_fin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="mx-auto max-w-7xl w-full ">{children}</main>
        </div>

        <footer>Copyright The Wild Oasis</footer>
      </body>
    </html>
  );
}
