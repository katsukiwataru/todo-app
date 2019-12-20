import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <Title>TODO APP</Title>
        <Link to={`/post/`}>購入した商品の追加</Link>
      </header>
    </>
  );
};

const Title = styled.h1`
  padding: 10px 30px;
  margin: 0;
`;

export default withRouter(Header);
