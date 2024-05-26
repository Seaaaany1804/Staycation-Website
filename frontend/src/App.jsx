import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Home from './pages/Home';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (login === 'justinmk134' && password === 'jamactin13') {
      navigate('/home');
      setLogin('');
      setPassword('');
    }
    else {
      alert('Wrong Credentials');
    }
  };

  return (
    <LoginPage
      login={login}
      password={password}
      setLogin={setLogin}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />

  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
