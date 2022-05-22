import Card from './components/Card';
import cats from './cats';
import { cardsStyle } from './App.css';

const App = () => {
  return (
    <div className={cardsStyle}>
      {cats.map((cat) => (
        <Card Cat={cat} key={cat.name} />
      ))}
    </div>
  );
};

export default App;
