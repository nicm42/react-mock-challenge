import Card from './components/Card';
import cats from './cats';
import * as style from './App.css';

const App = () => {
  return (
    <section className={style.cardsStyle}>
      {cats.map((cat) => (
        <Card Cat={cat} key={cat.name} />
      ))}
    </section>
  );
};

export default App;
