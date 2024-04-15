import * as S from './styles';
import { IButtonProps } from "./types";

export const Button = (props: IButtonProps) => {
  return(
    <S.Button onClick={props.onClick}>
      {props.children}
    </S.Button>
  )
}