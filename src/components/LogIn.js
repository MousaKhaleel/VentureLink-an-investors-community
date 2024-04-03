import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import $ from 'jquery'; 

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const url = 'http://localhost:80/server.php';
    const data = { email, password };
  
    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (responseData) {
        if (responseData.success) {
          setLoading(false);
          setRedirect(true);
        } else {
          setLoading(false);
          alert('Failed to login: ' + responseData.message);
        }
      },
      error: function (xhr, status, error) {
        setLoading(false);
        alert('Failed to login: ' + error);
      }
    });
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
          <p><small>Don't have an account yet?<Link to='/register'> Let's start!</Link></small></p>
          <br/>
          {!loading && <button type="submit" className="btn w-100" style={{ background: 'rgb(42, 89, 63)', color:'white' }} >LogIn</button>}
          {loading && <button type="submit" className="btn w-100" style={{ background: 'rgb(42, 89, 63)', color:'white' }} disabled >Loading...</button>}
        </form>
      </div>
    </div>
  );
}

export default LogIn;
