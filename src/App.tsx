import Card from './components/Card';
import cats from './cats';

function App() {
  return (
    <div className="App">
      {cats.map((cat) => (
        <Card Cat={cat} key={cat.name} />
      ))}
    </div>
  );
}

export default App;
