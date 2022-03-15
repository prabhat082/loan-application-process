import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusinessDetails from '../components/BusinessDetails';
import Header from '../components/Header';
import PersonalDetails from '../components/PersonalDetails';
import LoanDetails from '../components/LoanDetails';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
      <Route
  render={(props) => (
    <PersonalDetails {...props} user={user} updateUser={updateUser} />
  )}
  path="/"
  exact={true}
/>
<Route
        render={(props) => (
          <BusinessDetails {...props} user={user} updateUser={updateUser} />
        )}
        path="/second"
      />
      <Route
        render={(props) => (
          <LoanDetails {...props} user={user}  />
        )}
        path="/third"
      />
      </Routes>
    </div>
  </BrowserRouter>
);
const [user, setUser] = useState({});

const updateUser = (data) => {
  setUser((prevUser) => ({ ...prevUser, ...data }));
};

const resetUser = () => {
  setUser({});
};

export default AppRouter;