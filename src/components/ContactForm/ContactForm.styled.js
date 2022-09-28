import { Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 450px;
  padding: 15px 0;
`;

export const StyledContainer = styled(Container)`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  max-width: 960px;
  padding: 10px 15px;
`;

export const StyledGroup = styled(Form.Group)`
  width: 100%;
`;

export const StyledLabel = styled(Form.Label)`
  width: 100%;
`;
