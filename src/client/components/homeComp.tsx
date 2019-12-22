import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  product: Products;
  removeData: (productId: string) => void;
};

const Home: React.FC<Props> = ({ product, removeData }) => {
  return (
    <Contents>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.priority}</p>
      <Change>
        <Link to={`/post/${product.id}`}>編集</Link>
        <p onClick={() => removeData(product.id as string)}>削除</p>
      </Change>
    </Contents>
  );
};

const Contents = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: space-between;
`;

export default Home;
