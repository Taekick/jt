import "./App.scss";
import NiveauUn from "./Integration/NiveauUn";
import NiveauZero from "./Integration/NiveauZero";
import DecodeMethod from "./Javascript/DecodeMethod";
import Search from "./Search/Search";

function App() {
  return (
    <div className='wrapper'>
      <section className='integration mb-20'>
        <h1 className='mb-20'>Intégration</h1>
        <NiveauZero />
        <NiveauUn />
      </section>
      <section className='javascript mb-20'>
        <h1>Javascript</h1>
        <DecodeMethod />
      </section>
      <section className='react'>
        <h1 className='mb-20'>React</h1>
        <Search />
      </section>
    </div>
  );
}

export default App;
