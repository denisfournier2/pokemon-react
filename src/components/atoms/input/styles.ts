import styled from 'styled-components'	
import {colors} from '../../../theme/colors'
import {sizes} from '../../../theme/sizes'


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: ${colors.text};
  font-size: ${sizes.body};
  font-weight: 600;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${colors.lightBlue};
  border-radius: 5px;
  padding: 10px;
  background: ${colors.background};
  color: ${colors.text};
`