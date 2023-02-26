//React
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

//Styles
import './App.css';

//Components
import Navbar from './routes/navbar/Navbar';
import Authentication from './routes/authentication/Authentication';
import Main from './routes/main/Main';

//Types
export type UserData = {
  id: number;
  name: string;
  email: string;
  entries: string;
  joined: string;
};

function App() {
  const [user, setUser] = useState<UserData | string>('');
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navbar
            user={user}
            setUser={setUser}
          />
        }>
        <Route
          index
          element={
            <Main
              user={user as UserData}
              setUser={setUser}
            />
          }
        />
        <Route
          path="authentication/*"
          element={<Authentication setUser={setUser} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
