import React from 'react';
// , { useState }
// import { match } from 'react-router-dom';
// import history from '../plugins/history';
// import styled from 'styled-components';
// import PostDescComp from '../components/postDescComp';
// import { useMutation } from 'react-apollo';
// import gql from 'graphql-tag';

// type Props = {
//   match: match<{
//     postId: string;
//   }>;
// };

// const CREATE_PRODUCTS = gql`
//   mutation updateProduct($name: String!, $price: Int!, $id: ID) {
//     updateProduct(data: { name: $name, price: $price }, where: { id: $id }) {
//       id
//     }
//   }
// `;

const PostDesc: React.FC = () => {
  // const postId = match.params.postId || '';
  // const [name, setName] = useState<string | null>(null);
  // const [price, setPrice] = useState<number | null>(null);
  // const queryArgs = ['商品名', '値段'];
  // const [updateProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(CREATE_PRODUCTS, {
  //   variables: { id: CREATE_PRODUCTS },
  // });
  // const updateData = async (productName: string, productPrice: number, productId: number) => {
  //   await updateProduct({ variables: { name: productName, price: productPrice, id: productId } });
  //   history.push('/');
  // };

  // const setInputNamePrice = (event: React.ChangeEvent<HTMLInputElement>, queryArg: string) => {
  //   const eventTarget = event.target as HTMLButtonElement;
  //   if (!eventTarget.value) {
  //     setPrice(null);
  //   }
  //   if (queryArg === '商品名') {
  //     setName(eventTarget.value);
  //   }
  //   if (queryArg === '値段') {
  //     const priceNumber = parseInt(eventTarget.value, 10);
  //     setPrice(priceNumber);
  //   }
  // };

  return (
    <>
      <div>
        <p>hobe</p>
      </div>
      {/* <PostDescComp />
      {mutationError && <Error>ネットワークエラーです。</Error>}
      <FormArea>
        {queryArgs.map((queryArg, index) => {
          return (
            <React.Fragment key={index}>
              <ProductBox>
                <p>{queryArg}</p>
                <input type="text" placeholder={queryArg} onChange={(event) => setInputNamePrice(event, queryArg)} />
              </ProductBox>
            </React.Fragment>
          );
        })}
        <SubmitButton onClick={() => updateData(name as string, price as number, postId as any)}>登録する</SubmitButton>
      </FormArea> */}
    </>
  );
};

// const Error = styled.div`
//   font-size: 22px;
//   color: red;
//   text-align: center;
// `;

// const FormArea = styled.div`
//   width: 40%;
//   margin: 0 auto;
// `;

// const ProductBox = styled.div`
//   margin: 10px 0;
//   align-items: center;
// `;

// const SubmitButton = styled.button`
//   margin: 50px 0;
// `;

export default PostDesc;
