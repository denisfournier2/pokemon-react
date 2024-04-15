import styled from 'styled-components';


export const ButtonContainer = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
 
  @media (max-width: 320px) {
    width: 50%;
  }
`;