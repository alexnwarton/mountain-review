import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Layout from './components/Layout';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      setUser(user);
    }
    handleVerify();
  }, [])

  const handleSignIn = async (formData) => {
    const userInfo = await loginUser(formData);
    setUser(userInfo);
    history.push('/');
  }

  const handleSignUp = async (formData) => {
    const userInfo = await registerUser(formData);
    setUser(userInfo);
    history.push('/');
  }

  const handleSignOut = async () => {
    setUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  const [routePath, setPath] = useState('')

  return (
    <div className={ routePath === '/' ? 'snow' : 'App'}>
      <Layout user={user} handleSignOut={handleSignOut}>
        <Switch> 
          <Route path='/sign-in' exact>
            <SignIn handleSignIn={handleSignIn} routePath={routePath} setPath={setPath}/>
          </Route>
          <Route path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} routePath={routePath} setPath={setPath}/>
          </Route>
          <Route path='/'>
            <MainContainer user={user} routePath={routePath} setPath={setPath}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
