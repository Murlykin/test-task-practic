import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
from{
opacity: 0;
transform: translateX(-100%)
}
to{
    opacity: 1;
    transform: translateX(0);
}
`;

export const GoItWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  margin-top: 66px;
   animation: ${fadeIn} 1.5s ease-out;
`;

export const GoIt = styled.img`
  width: 900px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;
`;
