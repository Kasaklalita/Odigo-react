import "./nullstyle.css"
import "./App.css";
import IntroSection from "./components/layout/IntroSection/IntroSection";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import TheBenefits from "./components/layout/TheBenefits/TheBenefits";

function App() {
  return <div className="App">
    <MainHeader/>
    <main className="main">
      <IntroSection/>
      <TheBenefits/>
    </main>
  </div>;
}

export default App;
