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
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      setUser(user);
    }
    handleVerify();
  }, [])

  const handleSignIn = async (formData) => {
    setIsError(false)
    try {
      const userInfo = await loginUser(formData);
      setUser(userInfo);
      history.push('/');
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }

  const handleSignUp = async (formData) => {
    setIsError(false)
    try {
      const userInfo = await registerUser(formData);
      setUser(userInfo);
      history.push('/');
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
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
            <SignIn handleSignIn={handleSignIn} routePath={routePath} setPath={setPath} isError={isError} setIsError={setIsError}/>
          </Route>
          <Route path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} routePath={routePath} setPath={setPath} isError={isError} setIsError={setIsError}/>
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
