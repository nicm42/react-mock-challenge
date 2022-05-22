// import { useState } from 'react';
import Card from './components/Card';
import cats from './cats';
// import logo from './logo.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // console.log(cats);

  return (
    <div className="App">
      {cats.map((cat) => (
        <Card Cat={cat} key={cat.name} />
      ))}
    </div>
  );
}

export default App;
