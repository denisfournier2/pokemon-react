import styled from 'styled-components';


export const ButtonContainer = styled.div`
  width: 30%;
  height: 50px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  @media (max-width: 320px) {
    width: 50%;
  }
`

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 20px;
 
  /* @media (max-width: 320px) {
    width: 50%;
  } */
`

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: absolute;
  margin: 10px;
  z-index: 99;
  color: #EF3D42;
`