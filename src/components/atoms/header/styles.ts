import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'


export const Container = styled.header`
  min-width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.lightBlue};
`

export const Title = styled.h1`
  color: ${colors.orange};
  font-size: ${sizes.heading};
  font-family: ${fonts.heading};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
`
export const Subtitle = styled.h2`
  color: ${colors.orange};
  font-size: ${sizes.body};
  font-family: ${fonts.heading};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   display: flex;
  align-items: center;
  gap: 8px;
`