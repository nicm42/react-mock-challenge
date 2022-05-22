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
    <div className="card">
      <div className="card-name">{Cat.name}</div>
      <div className="card-breed">{Cat.breed}</div>
      <div className="card-age">{Cat.age}</div>
      <div className="card-description">{Cat.description}</div>
    </div>
  );
};

export default Card;
