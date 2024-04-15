import * as S from './styles'
import { ITextInputProps } from './types'
export const Input = (props: ITextInputProps) => {
  return (
    <S.Container>
      <S.Label htmlFor="input">{props.label}</S.Label>
      <S.Input id="input" name={props.name} value={props.value} onChange={props.onChange}/>
    </S.Container>
  )
}