import React, { useState } from 'react';
import { match } from 'react-router-dom';
import history from '../plugins/history';
import styled from 'styled-components';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

type Props = {
  match: match<{
    postId: string;
  }>;
};

const CREATE_PRODUCTS = gql`
  mutation updateProduct($id: ID, $title: String!, $description: String!, $priority: Int!, $progress: Boolean) {
    updateProduct(
      data: { title: $title, description: $description, priority: $priority, progress: $progress }
      where: { id: $id }
    ) {
      id
    }
  }
`;

const PostDesc: React.FC<Props> = ({ match }) => {
  const postId = match.params.postId || '';
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDesc] = useState<string | null>(null);
  const [priority, setPriority] = useState<number | null>(null);
  const [progress, setProgress] = useState<boolean | null>(null);
  const [updateProduct, { error: mutationError }] = useMutation<{ products: Products[] }>(CREATE_PRODUCTS, {
    variables: { id: CREATE_PRODUCTS },
  });
  const updateData = async (
    productId: number,
    productTitle: string,
    productDescription: string,
    productPriority: number,
    productProgress: boolean,
  ) => {
    await updateProduct({
      variables: {
        id: productId,
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
    <>
      {mutationError && <Error>ネットワークエラーです。</Error>}
      <FormArea>
        <ProductBox>
          <p>title: string</p>
          <input type="text" placeholder="" onChange={(event) => setInputTitle(event)} />
        </ProductBox>
        <ProductBox>
          <p>description: string</p>
          <input type="text" placeholder="" onChange={(event) => setInputDesc(event)} />
        </ProductBox>
        <ProductBox>
          <p>priority: number</p>
          <input type="text" placeholder="" onChange={(event) => setInputPrio(event)} />
        </ProductBox>
        <ProductBox>
          <p>progress: boolean</p>
          <input type="text" placeholder="" onChange={(event) => setInputProg(event)} />
        </ProductBox>
        <SubmitButton
          onClick={() =>
            updateData(postId as any, title as string, description as string, priority as number, progress as boolean)
          }
        >
          編集する
        </SubmitButton>
      </FormArea>
    </>
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

export default PostDesc;
