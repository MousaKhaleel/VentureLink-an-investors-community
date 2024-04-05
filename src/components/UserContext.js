import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser);

  const storedUserEmail = JSON.parse(localStorage.getItem('userEmail'));
  const [userEmail, setUserEmail] = useState(storedUserEmail);

  const storedUserPassword = JSON.parse(localStorage.getItem('userPassword'));
  const [userPassword, setUserPassword] = useState(storedUserPassword);

  // const storedUserType = JSON.parse(localStorage.getItem('userType'));
  // const [userType, setUserType] = useState(storedUserType);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userEmail', JSON.stringify(userEmail));
    localStorage.setItem('userPassword', JSON.stringify(userPassword));
    // localStorage.setItem('userType', JSON.stringify(userType));
  }, [user]);
  // , userType, setUserType

  return (
    <UserContext.Provider value={{ user, setUser, userEmail, setUserEmail, userPassword, setUserPassword}}>
      {children}
    </UserContext.Provider>
  );
};
