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
        <Route index element={<Authentication userInfo={userInfo} />} />
        <Route
          path="/register"
          element={<Authentication userInfo={userInfo} />}
        />
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
