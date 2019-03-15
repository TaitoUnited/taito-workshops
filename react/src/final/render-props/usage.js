import React from 'react';
import styled from 'styled-components';

import Fetch from './index';

const Usage = () => (
  <Fetch url="https://jsonplaceholder.typicode.com/posts">
    {({ loading, error, data }) => (
      <>
        {!!loading && <div>Loading...</div>}

        {!!error && (
          <div>
            <h1>Error occured!</h1>
            <p>{error}</p>
          </div>
        )}

        {!!data && (
          <>
            <h1>Posts:</h1>
            <Posts>
              {data.map(post => (
                <Post key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </Post>
              ))}
            </Posts>
          </>
        )}
      </>
    )}
  </Fetch>
);

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Post = styled.div`
  flex: none;
  width: 300px;
  margin: 16px;
`;

export default Usage;
