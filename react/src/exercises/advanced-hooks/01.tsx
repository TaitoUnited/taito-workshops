import React from 'react';

/*
Advanced Hooks - Exercise 1

- Use Star Wars API to search for characters based on an input's value (https://swapi.co/documentation#search)
- Implement the provided `search` skeleton function using native `fetch`
- Utilize `React.useEffect` to fire up the search when the input value changes
- Define an abort controller to abort any ongoing effect when a new effect is fired (https://developers.google.com/web/updates/2017/09/abortable-fetch)
- Add a button that triggers the search in addition to the input value change

NOTE: Since we are using `abort()` it's not necessary to add a debounce to the search.
      However, it's normally a good practice to use debounce to limit the number of API calls.

TIP: Use `React.useEffect` return/cleanup function to abort the search
TIP: Following a state machine like logic for the state of the search helps with reasoning about the code and mitigates invalid states
*/

interface SearchState {
  status: 'INITIAL' | 'LOADING' | 'ERROR' | 'SUCCESS';
  error: null | string;
  data: null | any[];
}

const initialState: SearchState = {
  status: 'INITIAL',
  error: null,
  data: null,
};

const API_URL = 'https://swapi.co/api/people/?search=';

const Exercise = () => {
  const search = React.useCallback(async (signal?: AbortSignal) => {
    // Implement
  }, [/* add necessary deps here */]);

  return <div>TODO</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
