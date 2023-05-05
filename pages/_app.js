import store from "../redux/store";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/mui/theme";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <CssBaseline/>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
