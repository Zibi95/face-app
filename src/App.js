import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Navbar from './routes/navbar/Navbar';
import Authentication from './routes/authentication/Authentication';
import Main from './routes/main/Main';

// FACE DETECTION API

function App() {
  const [user, setUser] = useState('');

  const userInfo = { user, setUser };

  return (
    <Routes>
      <Route path="/" element={<Navbar userInfo={userInfo} />}>
        <Route index element={<Authentication setUser={setUser} />} />
        <Route
          path="/register"
          element={<Authentication setUser={setUser} />}
        />
        <Route path="/main" element={<Main user={user} />} />
      </Route>
    </Routes>
  );
}

export default App;
