import { IContainerProps } from "./types"
import * as S from './styles'

export const Container = ({ children }: IContainerProps) => {
  return(
      <S.Container>
        {children}
      </S.Container>
  )
}