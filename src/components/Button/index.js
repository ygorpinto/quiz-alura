import styled from 'styled-components';

import db from '../../../db.json';

const Button = styled.button`
  background: ${db.theme.colors.secondary};
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: white;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
`;

export default Button;