import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Layout from './components/Layout';
import SignIn from './screens/SignIn';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const handleSignIn = async () => {


  }
  return (
    <div className='App'>
    <Layout>
      <h1>Test</h1>
      <Switch>
        <Route path='/'>Home</Route>
        <Route path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/register'>All Resorts</Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
