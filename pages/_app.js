import store from "../redux/store";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/mui/theme";
import "../styles/globals.css";
import RTL from "@/components/RtL/RTL";

export default function App({ Component, pageProps }) {
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </RTL>
  );
}
