import React from 'react';
import styled from 'styled-components';

const RemoveItemButtonEl = styled.button`
  border: 0;
  color: darkolivegreen;
  cursor: pointer;
  padding: 0;
  
  :focus,
  :hover {
    color: #023020;
    text-decoration: underline;
  }
`;

const RemoveItemButton = (props) => {
  return (
      <RemoveItemButtonEl onClick={() => props.removeFromCartAction(props.index)}>{props.children}</RemoveItemButtonEl>
  );
}

export default RemoveItemButton;
