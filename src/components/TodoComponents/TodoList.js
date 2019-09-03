import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const TheDiv = styled.div`
    text-align: center;
    color: #FFFFFF;
`

const TheH3 = styled.h3`
    text-align: center;
    color: #8A8D8F;
    font-weight: bold;
`;

const TodoList = props => {
  return (
    <TheDiv>
        <TheH3>Tasks to be completed:</TheH3>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </TheDiv>
  );
};

export default TodoList;