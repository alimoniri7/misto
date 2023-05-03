import store from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import theme from "@/mui/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
