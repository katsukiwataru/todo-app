import React, { useState } from 'react';
// import PostComp from '../components/postComp';
import history from '../plugins/history';
import styled from 'styled-components';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_PRODUCTS = gql`
  mutation createProduct($title: String!, $description: String!, $priority: Int!, $progress: Boolean) {
    createProduct(data: { title: $title, description: $description, priority: $priority, progress: $progress }) {
      id
      title
      description
    }
  }
`;

const Post: React.FC = () => {
  const [createProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(CREATE_PRODUCTS, {
    variables: { id: CREATE_PRODUCTS },
  });
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDesc] = useState<string | null>(null);
  const [priority, setPriority] = useState<number | null>(null);
  const [progress, setProgress] = useState<boolean | null>(null);
  const createData = async (
    productTitle: string,
    productDescription: string,
    productPriority: number,
    productProgress: boolean,
  ) => {
    await createProduct({
      variables: {
        title: productTitle,
        description: productDescription,
        priority: productPriority,
        progress: productProgress,
      },
    });
    history.push('/');
  };

  const setInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLButtonElement;
    if (!eventTarget.value) {
      setTitle(null);
    }
    setTitle(eventTarget.value);
  };

  const setInputDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLButtonElement;
    if (!eventTarget.value) {
      setDesc(null);
    }
    setDesc(eventTarget.value);
  };

  const setInputPrio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLButtonElement;
    if (!eventTarget.value) {
      setPriority(null);
    }
    const priorityNumber = parseInt(eventTarget.value, 10);
    setPriority(priorityNumber);
  };

  const setInputProg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target as HTMLButtonElement;
    if (!eventTarget.value) {
      setPriority(null);
    }
    setProgress(true);
  };

  return (
    <div>
      {mutationError && <Error>ネットワークエラーです。</Error>}
      <FormArea>
        <ProductBox>
          <p>title</p>
          <input type="text" placeholder="" onChange={(event) => setInputTitle(event)} />
        </ProductBox>
        <ProductBox>
          <p>description</p>
          <input type="text" placeholder="" onChange={(event) => setInputDesc(event)} />
        </ProductBox>
        <ProductBox>
          <p>priority</p>
          <input type="text" placeholder="" onChange={(event) => setInputPrio(event)} />
        </ProductBox>
        <ProductBox>
          <p>progress</p>
          <input type="text" placeholder="" onChange={(event) => setInputProg(event)} />
          {/* TODO:  checkbox*/}
        </ProductBox>
        <SubmitButton
          onClick={() => createData(title as string, description as string, priority as number, progress as boolean)}
        >
          登録する
        </SubmitButton>
      </FormArea>
    </div>
  );
};

const Error = styled.div`
  font-size: 22px;
  color: red;
  text-align: center;
`;

const FormArea = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const ProductBox = styled.div`
  margin: 10px 0;
  align-items: center;
`;

const SubmitButton = styled.button`
  margin: 50px 0;
`;

export default Post;
