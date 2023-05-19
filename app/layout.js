import "./globals.css";
import Providers from "@/redux/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl">
            <Providers>{children}</Providers>
      </body>
    </html>
  );
}
