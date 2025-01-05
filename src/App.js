import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/homepage';
import Account from './Pages/Account.jsx';
import AdminPage from './Pages/AdminPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
