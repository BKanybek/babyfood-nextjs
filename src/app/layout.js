import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContextProvider from "@/context/Context";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Babyfood",
  description: "Интернет магазин десткого питания",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ContextProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
