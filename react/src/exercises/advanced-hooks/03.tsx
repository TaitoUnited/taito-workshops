import React from 'react';

const description = `
**Advanced Hooks - Exercise 3**

- Implement the missing pieces inside \`AuthProvider\` component and \`useAuth\` hook
- Fix the context value typings -> remember that the value can be \`undefined | AuthContextValue\`
- Get the user data from \`localStorage\` when initializing the state
- Persist the user data to \`localStorage\` after login and when it is updated via \`updateUser\` function
- Clear the persisted user data after logout

DOCS:
- [createContext](https://reactjs.org/docs/context.html#reactcreatecontext)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Context with TS](https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript--flow)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
`;

interface User {
  id: string;
  name: string;
  email: string;
}

type UserUpdates = Partial<Omit<User, 'id'>>;

interface AuthContextValue {
  login: () => any;
  logout: () => any;
  updateUser: (updates: UserUpdates) => any;
  user: null | User;
}

const USER = {
  id: '1',
  name: 'Ursula Userbeck',
  email: 'ursula.userbeck@gmail.com',
};

const AuthContext = React.createContext(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<null | User>(() => {
    // Implement
    return null;
  });

  const login = () => {
    // Implement
  };

  const logout = () => {
    // Implement
  };

  const updateUser = (updates: UserUpdates) => {
    // Implement
  };

  return (
    <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  // Implement
  return {
    user: USER,
    login: () => {},
    logout: () => {},
    updateUser: (u: any) => {},
  };
};

const UpdateUserForm = ({
  user,
  updateUser,
}: {
  user: User;
  updateUser: (update: UserUpdates) => any;
}) => {
  return (
    <form>
      <span>ID: {user.id}</span>

      <br />

      <label>
        Update name:&nbsp;
        <input
          value={user.name}
          onChange={({ currentTarget }) =>
            updateUser({ name: currentTarget.value })
          }
        />
      </label>

      <br />

      <label>
        Update email:&nbsp;
        <input
          value={user.email}
          onChange={({ currentTarget }) =>
            updateUser({ email: currentTarget.value })
          }
        />
      </label>
    </form>
  );
};

const LoggedIn = () => {
  const { user, updateUser, logout } = useAuth();

  return (
    <div>
      <strong>You are logged IN!</strong>
      <br />
      {user && <UpdateUserForm user={user} updateUser={updateUser} />}
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const LoggedOut = () => {
  const { login } = useAuth();

  return (
    <div>
      <strong>You are logged OUT!</strong>
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

const Exercise = () => {
  const { user } = useAuth();
  return <div>{user ? <LoggedIn /> : <LoggedOut />}</div>;
};

// ---------------------------- DO NOT MODIFY USAGE ----------------------------
const Usage = () => {
  return (
    <AuthProvider>
      <Exercise />
    </AuthProvider>
  );
};

Usage.description = description;

export default Usage;
