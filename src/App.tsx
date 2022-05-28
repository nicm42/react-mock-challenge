import Card from './components/Card';
import cats from './cats';
import { appTheme } from './theme.css';
import * as style from './App.css';

const App = () => {
  return (
    <div className={appTheme}>
      <div className={style.cardsStyle}>
        {cats.map((cat) => (
          <Card Cat={cat} key={cat.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
