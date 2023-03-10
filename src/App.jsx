import "./nullstyle.css";
import "./App.css";
import IntroSection from "./components/layout/IntroSection/IntroSection";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import TheBenefits from "./components/layout/TheBenefits/TheBenefits";
import ThePlaces from "./components/layout/ThePlaces/ThePlaces";
import TheTours from "./components/layout/TheTours/TheTours";
import BestPlaces from "./components/layout/BestPlaces/BestPlaces";
import TheFooter from "./components/layout/TheFooter/TheFooter";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main className="main">
        <IntroSection />
        <TheBenefits />
        <ThePlaces />
        <TheTours />
        <BestPlaces />
      </main>
      <TheFooter />
    </div>
  );
}

export default App;
