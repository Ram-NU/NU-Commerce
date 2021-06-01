import './App.css';
import Navigation from './header/Navigation.js'
import Category from './header/Category.js';
import Bodyhome from './header/Bodyhome.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Category/>
      <Bodyhome/>
    </div>
  );
}

export default App;
