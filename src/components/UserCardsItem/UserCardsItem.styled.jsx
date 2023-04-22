import styled from '@emotion/styled';
import { Checkbox } from '@ariakit/react';

export const UserCards = styled.li`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
flex-direction: column;
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  color: #EBD8FF;
`;

export const CheckboxButton = styled(Checkbox)`
  background-color: rgba(0, 0, 0, 0.25);
  color: hsl(204, 20%, 100%);
  width: 196px;
  height: 50px;
`;
export const Cards = styled.div`
display: flex;
gap: 20px;
 width: 1200px;
`
