import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Navbar from './routes/navbar/Navbar';
import Authentication from './routes/authentication/Authentication';
import Main from './routes/main/Main';
import Signin from './components/Authentication/components/Signin';
import Register from './components/Authentication/components/Register';

function App() {
  const [user, setUser] = useState('');

  const userInfo = { user, setUser };

  return (
    <Routes>
      <Route
        path="/"
        element={<Navbar userInfo={userInfo} />}>
        <Route
          index
          element={<Main user={user} />}
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
