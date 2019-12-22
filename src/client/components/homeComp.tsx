import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

type Props = {
  product: Products;
  removeData: (productId: string) => void;
};

const Home: React.FC<Props> = ({ product, removeData }) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.priority}</p>
      <div>
        <Link to={`/post/${product.id}`}>編集</Link>
        <p onClick={() => removeData(product.id as string)}>削除</p>
      </div>
    </div>
  );
};

export default Home;
