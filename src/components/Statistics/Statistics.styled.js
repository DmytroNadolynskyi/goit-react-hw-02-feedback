import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

export const Value = styled.li`
  border-radius: 5px;
  background: gold;
  width: 100px;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 400;

`;

export const Total = styled.li`
  border-radius: 5px;
  background: gold;
  width: 250px;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 500;
`;