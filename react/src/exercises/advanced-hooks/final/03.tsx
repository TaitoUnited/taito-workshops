import React from 'react';

// Advanced Hooks - Exercise 3 | Final

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

const AuthContext = React.createContext<undefined | AuthContextValue>(
  undefined
);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<null | User>(() => {
    const u = localStorage.getItem('user');
    return u ? (JSON.parse(u) as User) : null;
  });

  const login = () => {
    setUser(USER);
    localStorage.setItem('user', JSON.stringify(USER));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updates: UserUpdates) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, updateUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const userContext = React.useContext(AuthContext);
  if (!userContext) throw new Error('Missing AuthProvider!');
  return userContext;
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

export default Usage;
