import React from 'react';

// Basics of Hooks - Exercise 3 | Final

const initialState = {
  newAnimal: '',
  animals: ['dog', 'cat', 'lion', 'elephant'],
};

type State = typeof initialState;

type Action =
  | { type: 'set-new-animal'; payload: string }
  | { type: 'reset-new-animal' }
  | { type: 'add-animal' }
  | { type: 'remove-animal'; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'set-new-animal':
      return { ...state, newAnimal: action.payload };
    case 'reset-new-animal':
      return { ...state, newAnimal: '' };
    case 'add-animal': {
      if (!state.newAnimal || state.animals.includes(state.newAnimal)) {
        return state;
      }
      return {
        ...state,
        animals: [...state.animals, state.newAnimal],
        newAnimal: '',
      };
    }
    case 'remove-animal':
      return {
        ...state,
        animals: state.animals.filter(a => a !== action.payload),
      };
    default:
      throw new Error();
  }
};

const Exercise = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addAnimal = (event: any) => {
    event.preventDefault();
    dispatch({ type: 'add-animal' });
  };

  return (
    <div>
      <ul>
        {state.animals.map(animal => (
          <li key={animal}>
            <span>{animal}</span>
            &nbsp;&nbsp;
            <button
              onClick={() =>
                dispatch({ type: 'remove-animal', payload: animal })
              }
            >
              🗑
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={addAnimal}>
        <label>
          Add an animal &nbsp;
          <input
            value={state.newAnimal}
            onChange={({ currentTarget }) =>
              dispatch({ type: 'set-new-animal', payload: currentTarget.value })
            }
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
