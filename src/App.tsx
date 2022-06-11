import Card from './components/Card';
import cats from './cats';
import * as style from './App.css';

const App = () => {
  return (
    <>
      <header>
        <h1 className={style.headerStyle}>Cats</h1>
      </header>
      <section className={style.cardsStyle}>
        {cats.map((cat) => (
          <Card Cat={cat} key={cat.name} />
        ))}
      </section>
    </>
  );
};

export default App;
