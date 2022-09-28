import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding: 40px 0;
`;

export const ContactsListBody = styled.tbody``;

export const ContactsItem = styled.tr`
  &:nth-child(odd) {
    background-color: #c2c2c247;
  }
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const TableStyle = styled.table`
  width: 100%;
`;
export const TableName = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
`;
