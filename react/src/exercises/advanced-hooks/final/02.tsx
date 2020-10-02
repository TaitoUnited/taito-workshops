import React from 'react';

// Advanced Hooks - Exercise 2 | Final

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

const useSwapi = (searchTerm: string) => {
  const API_URL = 'https://swapi.dev/api/people/?search=';

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

  React.useEffect(() => {
    if (searchTerm) {
      const controller = new AbortController();
      search(controller.signal);
      return () => controller.abort();
    } else {
      setSearchState(initialState);
    }
  }, [searchTerm, search, setSearchState]);

  return { search, ...searchState };
};

const Exercise = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const swapi = useSwapi(searchTerm);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (searchTerm) swapi.search();
  };

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

      {swapi.status === 'LOADING' && <p>Searching...</p>}

      {swapi.status === 'ERROR' && (
        <p>Failed to search! ({swapi.error || 'Unknown error'})</p>
      )}

      {swapi.status === 'SUCCESS' &&
        !!swapi.data &&
        (swapi.data.length > 0 ? (
          <ul>
            {swapi.data.map(item => (
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
