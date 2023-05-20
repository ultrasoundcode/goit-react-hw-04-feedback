import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  min-width: 50px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  background-color: transparent;
  color: p = ${p => p.theme.colors.black};
  font-weight: 700;
  border: 1px solid p = ${p => p.theme.colors.black};
`;
