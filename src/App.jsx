import styles from "./App.module.css";
import Header from "./Components/Header";
import LogoDiv from "./Components/LogoDiv";
import AboutSection from "./Components/AboutSection";

function App() {
  return (
    <div className={styles.mainBox}>
      <Header />
      <LogoDiv />
      <AboutSection />
    </div>
  );
}

export default App;
