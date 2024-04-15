import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${colors.orange};
  color: ${colors.text};
  font-weight: 600;
  font-size: ${sizes.body};
  cursor: pointer;

  &:hover {
    background: ${colors.darkOrange};
    transition: 0.5s ease-in-out;
  }
`