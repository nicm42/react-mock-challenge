import * as style from './Card.css';

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
    <div className={style.cardStyle}>
      <img className={style.cardImage} src={Cat.url} alt={Cat.description} />
      <div className={style.cardText}>
        <h2 className={style.cardName}>{Cat.name}</h2>
        <ul className={style.cardInfo}>
          <li className={style.cardBreed}>{Cat.breed}</li>
          <li className={style.cardAge}></li>
          {Cat.age} {Cat.age === 1 ? ' year' : 'years'}
        </ul>
        <p className="card-description">{Cat.description}</p>
      </div>
    </div>
  );
};

export default Card;
