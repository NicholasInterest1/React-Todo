import React from 'react';
import styled from 'styled-components';

const TDFormDiv = styled.div`
    display: flex;
    margin: 20px 5px;
    justify-content: center;
`

const TDFormBtn = styled.button`
    background-color: #C60C30;
    color: #B0B7BC;
    font-weight: bold;
    padding: 10px 10px;
    margin: 0 15px;
    border-radius: 8px;
    border: 2px solid #B0B7BC;
`

const TDFormInput = styled.input`
    padding: 10px 5px;
    margin: 0 15px;
    border: 4px solid #B0B7BC;
`

const TodoForm = props => {
  return (
      <TDFormDiv>
      <TDFormInput
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Insert Task Here"
      />
      <TDFormBtn onClick={props.handleAddTodo}>Add Todo</TDFormBtn>
      <TDFormBtn onClick={props.handleClearTodos}>Clear Completed</TDFormBtn>
      </TDFormDiv>
  );
};

export default TodoForm;
