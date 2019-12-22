import React from 'react';
import styled from 'styled-components';
import HomeComp from '../components/homeComp';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PROGRESSFALSE = gql`
  {
    products(where: { progress: false }, orderBy: priority_DESC) {
      id
      title
      description
      priority
      progress
    }
  }
`;

const GET_PROGRESSTRUE = gql`
  {
    products(where: { progress: true }, orderBy: priority_DESC) {
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
  const {
    data: PROGRESSFALSE_QueryData,
    loading: PROGRESSFALSE_Loading,
    error: PROGRESSFALSE_QueryError,
    refetch: PROGRESSFALSE_Refetch,
  } = useQuery<{ products: Products[] }>(GET_PROGRESSFALSE, {
    fetchPolicy: 'network-only',
  });
  const {
    data: PROGRESSTRUE_QueryData,
    loading: PROGRESSTRUE_Loading,
    error: PROGRESSTRUE_QueryError,
    refetch: PROGRESSTRUE_Refetch,
  } = useQuery<{ products: Products[] }>(GET_PROGRESSTRUE, {
    fetchPolicy: 'network-only',
  });
  const [deleteProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(DELETE_PRODUCTS, {
    variables: { id: DELETE_PRODUCTS },
  });

  const removeData = async (productId: string) => {
    await deleteProduct({ variables: { id: productId } });
    await PROGRESSFALSE_Refetch();
    await PROGRESSTRUE_Refetch();
  };

  return (
    <div>
      {(PROGRESSFALSE_Loading || PROGRESSTRUE_Loading) && <Loading>loading</Loading>}
      {(PROGRESSFALSE_QueryError || PROGRESSTRUE_QueryError) && (
        <Error>ネットワークエラーです。取得できませんでした。</Error>
      )}
      {mutationError && <Error>ネットワークエラーです。削除できませんでした。</Error>}
      <SubTitle>Doing Todo List</SubTitle>
      {PROGRESSFALSE_QueryData &&
        PROGRESSFALSE_QueryData.products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <HomeComp product={product} removeData={removeData} />
            </React.Fragment>
          );
        })}
      <SubTitle>Done Todo List</SubTitle>
      {PROGRESSTRUE_QueryData &&
        PROGRESSTRUE_QueryData.products.map((product) => {
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
const SubTitle = styled.h2`
  padding: 10px 30px;
  margin: 0;
`;

export default Home;
