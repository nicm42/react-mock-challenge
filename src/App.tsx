import Card from './components/Card';
import cats from './cats';
import { exampleStyle } from './App.css';

const App = () => {
  return (
    <div className={exampleStyle}>
      {cats.map((cat) => (
        <Card Cat={cat} key={cat.name} />
      ))}
    </div>
  );
};

export default App;
