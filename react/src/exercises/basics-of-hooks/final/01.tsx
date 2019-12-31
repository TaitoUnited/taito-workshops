import React from 'react';

// Basics of Hooks - Exercise 1 | Final

const Exercise = () => {
  const [newAnimal, setNewAnimal] = React.useState('');
  const [animals, setAnimals] = React.useState([
    'dog',
    'cat',
    'lion',
    'elephant',
  ]);

  const removeAnimal = (animal: string) => {
    setAnimals(prev => prev.filter(a => a !== animal));
  };

  const addAnimal = (event: any) => {
    event.preventDefault();
    if (!newAnimal || animals.includes(newAnimal)) return;
    setAnimals(prev => [...prev, newAnimal]);
    setNewAnimal('');
  };

  return (
    <div>
      <ul>
        {animals.map(animal => (
          <li key={animal}>
            <span>{animal}</span>
            &nbsp;&nbsp;
            <button onClick={() => removeAnimal(animal)}>🗑</button>
          </li>
        ))}
      </ul>

      <form onSubmit={addAnimal}>
        <label>
          Add an animal &nbsp;
          <input
            value={newAnimal}
            onChange={({ currentTarget }) => setNewAnimal(currentTarget.value)}
          />
        </label>
        &nbsp;
        <button type="submit">➕</button>
      </form>
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
