import './App.css';
import { Header } from '../Header';
import { MainSection } from '../MainSection';
import { AboutUs } from '../AboutUs';
import { Services } from '../Services';
import { Works } from '../Works';
import { Contact } from '../Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutUs />
      <Services />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
