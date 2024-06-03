import './App.css';
import jsonData from '../src/assets/data/etsy.json';
import Listing from './components/Listing/Listing';

function App() {
  const items: array = jsonData;

  return (
    <Listing items = {items}/>   
  )
}

export default App
