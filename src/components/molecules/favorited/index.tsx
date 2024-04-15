import { useState } from "react";
import { CgPokemon } from "react-icons/cg";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { colors } from "../../../theme/colors";
import { Button } from '../../atoms/button';
import * as S from './styles';
import { ILocalPokemonProps } from "./types";

export const Favorited = (props: ILocalPokemonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true)
  }

  const getTypeColor = (type: string) => {
    return colors[type.toLowerCase()] || colors.black;
  }

  const getBorderStyle = () => {
    const borderColors = getTypeColor(props.type1) && '#fff';
    return `5px solid ${borderColors[0]}`; 
  }

  return (
    <S.Container style={{ border:  getBorderStyle() }}>
      <S.Title>Status do Pokemon</S.Title>
      <S.StatusLine>
        <S.StatusTitle>Nome:</S.StatusTitle>
        <S.StatusText>{props.name}</S.StatusText>
      </S.StatusLine>
      <S.StatusLine>
        <S.StatusTitle>Altura:</S.StatusTitle>
        <S.StatusText>{props.height} fts</S.StatusText>
      </S.StatusLine>
      <S.StatusLine>
        <S.StatusTitle>Peso:</S.StatusTitle>
        <S.StatusText>{props.weight} lbs</S.StatusText>
      </S.StatusLine>
      <S.StatusLine>
        <S.StatusTitle>Tipo:</S.StatusTitle>
        <S.StatusText>{props.type1}</S.StatusText>
      </S.StatusLine>
      {props.type2 &&
        <S.StatusLine>
          <S.StatusTitle>Tipo:</S.StatusTitle>
          <S.StatusText>{props.type1}</S.StatusText>
        </S.StatusLine>
      }
      <S.PokemonImage src={props?.sprite} alt="" />
      <S.ButtonContainer>
        <Button onClick={() => null } loading={false}>
          {isFavorite ?  <MdOutlineCatchingPokemon /> : <CgPokemon /> }
          Liberar
        </Button>
      </S.ButtonContainer>
    </S.Container>
  )
}