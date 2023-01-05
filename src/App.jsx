import "./App.css";
import IntroSection from "./components/IntroSection/IntroSection";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  return <div className="App">
    <MainHeader/>
    <main className="main">
      <IntroSection/>
    </main>
  </div>;
}

export default App;
