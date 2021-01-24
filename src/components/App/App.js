import './App.css';
import { Header } from '../Header';
import { MainSection } from '../MainSection';
import { AboutUs } from '../AboutUs';
import { Services } from '../Services'


function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
