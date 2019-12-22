import React from 'react';
import styled from 'styled-components';
import HomeComp from '../components/homeComp';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  {
    products {
      id
      title
      description
      priority
      progress
    }
  }
`;

const DELETE_PRODUCTS = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
      title
      description
      priority
      progress
    }
  }
`;

const Home: React.FC = () => {
  const { data: queryData, loading, error: queryError, refetch } = useQuery<{ products: Products[] }>(GET_PRODUCTS, {
    fetchPolicy: 'network-only',
  });
  const [deleteProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(DELETE_PRODUCTS, {
    variables: { id: DELETE_PRODUCTS },
  });

  const removeData = async (productId: string) => {
    await deleteProduct({ variables: { id: productId } });
    await refetch();
  };

  if (queryData) {
    console.log(queryData.products);
  }

  return (
    <div>
      {loading && <Loading>loading</Loading>}
      {queryError && <Error>ネットワークエラーです。取得できませんでした。</Error>}
      {mutationError && <Error>ネットワークエラーです。削除できませんでした。</Error>}
      {queryData &&
        queryData.products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <HomeComp product={product} removeData={removeData} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

const Loading = styled.div`
  font-size: 22px;
  color: green;
  text-align: center;
`;

const Error = styled.div`
  font-size: 22px;
  color: red;
  text-align: center;
`;

export default Home;
