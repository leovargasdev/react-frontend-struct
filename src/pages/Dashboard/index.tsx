import React, { useState, useEffect } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

// import api from '../../services/api';
import { Container, ListUsers } from './styles';

import usersDefault from './content';

interface User {
  id: number;
  login: {
    email: string;
    password: string;
  };
}

const Dashboard: React.FC = () => {

  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem('@exampleLocalStorage:users');
    if (storagedUsers) return JSON.parse(storagedUsers);
    return usersDefault;
  });

  useEffect(() => {
    localStorage.setItem(
      '@exampleLocalStorage:users',
      JSON.stringify(users),
    );
  }, [users]);

  return (
    <Container>
      <ListUsers>
        <h1>Lista de Usuários</h1>
        {users.map(user => (
          <Link key={user.id} to="/page2">
            <span>{user.id}</span>
            <div>
              <strong>{user.login.email}</strong>
              <p>{user.login.password}</p>
            </div>
            <GoChevronRight size={40} />
          </Link>
        ))}
      </ListUsers>
    </Container>
  );
};

export default Dashboard;
