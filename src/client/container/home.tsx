import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import HomeComp from '../components/homeComp';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  {
    products {
      id
      title
      description
      priority
    }
  }
`;

// const DELETE_PRODUCTS = gql`
//   mutation deleteProduct($id: ID!) {
//     deleteProduct(where: { id: $id }) {
//       id
//       name
//       price
//     }
//   }
// `;

const Home: React.FC = () => {
  const { data: queryData, loading, error: queryError } = useQuery<{ products: Products[] }>(GET_PRODUCTS, {
    fetchPolicy: 'network-only',
  });
  // const [deleteProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(DELETE_PRODUCTS, {
  //   variables: { id: DELETE_PRODUCTS },
  // });

  // const removeData = async (productId: string) => {
  //   await deleteProduct({ variables: { id: productId } });
  //   await refetch();
  // };

  return (
    <div>
      {loading && <Loading>loading</Loading>}
      {queryError && <Error>ネットワークエラーです。情報を取得できませんでした。</Error>}
      {queryData &&
        queryData.products.map(
          (product: { id: string | number | undefined; title: React.ReactNode; description: React.ReactNode }) => {
            return (
              <React.Fragment key={product.id}>
                <div>
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                  <div>
                    <Link to={`/post/${product.id}`}>編集</Link>
                    {/* <p onClick={() => removeData(product.id as string)}>削除</p> */}
                  </div>
                </div>
              </React.Fragment>
            );
          },
        )}
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

// const Product = styled.div`
//   display: flex;
//   width: 50%;
//   justify-content: space-between;
//   text-align: center;
//   align-items: center;
//   margin: 10px auto;
//   background-color: #f6f6f6;
// `;

// const Name = styled.p`
//   width: 100%;
// `;

// const Price = styled.p`
//   width: 100%;
// `;

// const Id = styled.p`
//   width: 100%;
// `;

// const Remove = styled.span`
//   margin: 0 10px;
// `;

export default Home;
