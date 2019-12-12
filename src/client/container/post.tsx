import React from 'react';
// , { useState }
// import PostComp from '../components/postComp';
// import history from '../plugins/history';
// import styled from 'styled-components';
// import { useMutation } from 'react-apollo';
// import gql from 'graphql-tag';

// const CREATE_PRODUCTS = gql`
//   mutation createProduct($name: String!, $price: Int!) {
//     createProduct(data: { name: $name, price: $price }) {
//       id
//       name
//       price
//     }
//   }
// `;

const Post: React.FC = () => {
  // const [createProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(CREATE_PRODUCTS, {
  //   variables: { id: CREATE_PRODUCTS },
  // });
  // const [name, setName] = useState<string | null>(null);
  // const [price, setPrice] = useState<number | null>(null);
  // const queryArgs = ['商品名', '値段'];

  // const createData = async (productName: string, productPrice: number) => {
  //   await createProduct({ variables: { name: productName, price: productPrice } });
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
    <div>
      <p>hoge</p>
      {/* <PostComp />
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
        <SubmitButton onClick={() => createData(name as string, price as number)}>登録する</SubmitButton>
      </FormArea> */}
    </div>
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

export default Post;
