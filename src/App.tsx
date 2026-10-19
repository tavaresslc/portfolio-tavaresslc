import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { LangProvider } from "./contexts/LangContext";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <Main />
        <Footer />
      </LangProvider>
    </ThemeProvider>
  );
}
