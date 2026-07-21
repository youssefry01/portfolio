import { ThemeProvider } from "./ThemeContext";

const Providers = ({ children }) => (
    <ThemeProvider>
      {children}
    </ThemeProvider>
);

export default Providers;