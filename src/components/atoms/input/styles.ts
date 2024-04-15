import styled from 'styled-components'	
import {colors} from '../../../theme/colors'
import {sizes} from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
  font-size: ${sizes.body};
  font-family: ${fonts.heading};
`

export const Label = styled.label`
  color: ${colors.text};
  font-size: ${sizes.body};
  font-weight: 400;
  margin-bottom: 5px;
  font-size: 16px;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
  padding: 10px;
  background: ${colors.background};
  color: ${colors.text};
  font-size: x-large;
`
