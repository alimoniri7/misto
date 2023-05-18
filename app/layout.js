import RTL from "@/components/RtL/RTL";
import "./globals.css";
import MuiThemeProvider from "@/mui/MuiThemeProvider";
import Providers from "@/redux/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl">
        {/* <RTL> */}
          {/* <MuiThemeProvider> */}
            <Providers>{children}</Providers>
          {/* </MuiThemeProvider> */}
        {/* </RTL> */}
      </body>
    </html>
  );
}
