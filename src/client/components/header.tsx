import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <Title>TODO APP</Title>
        <LinkContent>
          <Link to={`/post/`}>TODOの追加</Link>
        </LinkContent>
      </header>
    </>
  );
};

const LinkContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  padding: 10px 30px;
  margin: 0;
`;

export default withRouter(Header);
