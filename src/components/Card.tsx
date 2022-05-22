import { cardStyle, cardInfo } from './Card.css';

interface Cat {
  name: string;
  breed: string;
  url: string;
  description: string;
  age: number;
}

interface CatProps {
  Cat: Cat;
}

const Card = ({ Cat }: CatProps) => {
  return (
    <div className={cardStyle}>
      <img className="card-image" src={Cat.url} alt={Cat.description} />
      <div className={cardInfo}>
        <div className="card-name">{Cat.name}</div>
        <div className="card-breed">{Cat.breed}</div>
        <div className="card-age">
          {Cat.age} {Cat.age === 1 ? ' year' : 'years'}
        </div>
        <div className="card-description">{Cat.description}</div>
      </div>
    </div>
  );
};

export default Card;
