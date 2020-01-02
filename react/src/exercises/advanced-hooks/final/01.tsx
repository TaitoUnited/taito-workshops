import React from 'react';

// Advanced Hooks - Exercise 1 | Final

const API_URL = 'https://swapi.co/api/people/?search=';

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

const Exercise = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchState, setSearchState] = React.useState<SearchState>(
    initialState
  );

  const search = React.useCallback(
    async (signal?: AbortSignal) => {
      try {
        setSearchState(prev => ({
          ...prev,
          error: null,
          status: 'LOADING',
        }));

        const res = await fetch(`${API_URL}${searchTerm}`, { signal });

        if (res.status === 200) {
          const data = await res.json();

          setSearchState({
            ...initialState,
            data: data.results,
            status: 'SUCCESS',
          });
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setSearchState(prev => ({
            ...prev,
            error: error.message,
            status: 'ERROR',
          }));
        }
      }
    },
    [searchTerm]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (searchTerm) search();
  };

  React.useEffect(() => {
    if (searchTerm) {
      const controller = new AbortController();
      search(controller.signal);
      return () => controller.abort();
    } else {
      setSearchState(initialState);
    }
  }, [searchTerm, search, setSearchState]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search Star Wars character:&nbsp;
          <input
            value={searchTerm}
            onChange={({ currentTarget }) => setSearchTerm(currentTarget.value)}
          />
        </label>
        &nbsp;
        <button type="submit">🔍</button>
      </form>

      {searchState.status === 'LOADING' && <p>Searching...</p>}

      {searchState.status === 'ERROR' && (
        <p>Failed to search! ({searchState.error || 'Unknown error'})</p>
      )}

      {searchState.status === 'SUCCESS' &&
        !!searchState.data &&
        (searchState.data.length > 0 ? (
          <ul>
            {searchState.data.map(item => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results.</p>
        ))}
    </div>
  );
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return <Exercise />;
};

export default Usage;
