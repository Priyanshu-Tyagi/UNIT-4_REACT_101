import './App.css';
import Button from './components/Button';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';


function App() {
  const [theme,toggleTheme] = useContext(AppContext);

  return (
    <div className="App">
      <Button>HELLO</Button>
      <br/>
      <br/>
      <Button onClick={()=>toggleTheme()}>Toggle</Button>
    </div>
  );
}

export default App;
