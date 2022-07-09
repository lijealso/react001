import React from 'react';
import Comment from './components/Comment';

function App() {
  return (
    <>
      <h1>Comentários</h1>
      <Comment title="Comentário Um" author="Manuel Silva"/>
      <Comment title="Comentário Dois" author="Sara Gomes" />
      <Comment title="Comentário Três" author="Rui Maria"/>
    </>
  );
}

export default App