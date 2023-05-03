import Hero from './components/hero.jsx';
import Demo from './components/demo.jsx';
import './App.css';
const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className='application'>
        <Hero/>
        <Demo/>
      </div>
    </main>
  );
};
export default App;