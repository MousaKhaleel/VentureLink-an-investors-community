import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext, UserProvider } from './UserContext';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser, setUserEmail, setUserPassword, setUserType} = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = 'http://localhost:80/server.php';
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setLoading(false);
        setRedirect(true);
        setUser(response.data.name);
        setUserEmail(email);
        setUserPassword(password);
        setUserType(response.data.type);
      } else {
        setLoading(false);
        setErrorMessage('Failed to login: ' + response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('Failed to login: ' + error.message);
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='wContainer'>
      <div className="container-md mx-auto w-100 p-5 mt-5 rounded" style={{ background: 'rgb(247,247,247)' }}>
        <h1>Log In</h1>
        <br/>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <br/>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" />
          </div>
          <br />
          <p><small>Don't have an account yet?<Link to='/register'> Let's Register!</Link></small></p>
          <br/>
          {!loading && <button type="submit" className="btn w-100" style={{ background: 'rgb(52, 114, 79)', color:'white' }} >LogIn</button>}
          {loading && <button type="submit" className="btn w-100" style={{ background: 'rgb(52, 114, 79)', color:'white' }} disabled >Loading...</button>}
        </form>
      </div>
    </div>
  );
}

export default LogIn;
