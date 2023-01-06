import "./nullstyle.css"
import "./App.css";
import IntroSection from "./components/layout/IntroSection/IntroSection";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import TheBenefits from "./components/layout/TheBenefits/TheBenefits";
import ThePlaces from "./components/layout/ThePlaces/ThePlaces";

function App() {
  return <div className="App">
    <MainHeader/>
    <main className="main">
      <IntroSection/>
      <TheBenefits/>
      <ThePlaces/>
    </main>
  </div>;
}

export default App;
