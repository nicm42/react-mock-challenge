import {
  cardStyle,
  cardImage,
  cardText,
  cardName,
  cardInfo,
  cardBreed,
  cardAge,
} from './Card.css';

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
      <img className={cardImage} src={Cat.url} alt={Cat.description} />
      <div className={cardText}>
        <h2 className={cardName}>{Cat.name}</h2>
        <ul className={cardInfo}>
          <li className={cardBreed}>{Cat.breed}</li>
          <li className={cardAge}></li>
          {Cat.age} {Cat.age === 1 ? ' year' : 'years'}
        </ul>
        <p className="card-description">{Cat.description}</p>
      </div>
    </div>
  );
};

export default Card;
