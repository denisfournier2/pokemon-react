import { useState } from "react";
import { CgPokemon } from "react-icons/cg";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { colors } from "../../../theme/colors";
import { Button } from '../../atoms/button';
import * as S from './styles';
import { IPokemonProps } from "./types";

export const Pokemon = (props: IPokemonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true)
  }

  const getTypeColor = (type: string) => {
    return colors[type.toLowerCase()] || colors.black;
  }

  const getBorderStyle = () => {
    const borderColors = props.types?.map(type => getTypeColor(type.type.name));
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
      {props.types?.map((type, index) => {
        return (
          <S.StatusLine key={index}>
            <S.StatusTitle>Tipo {index === 0 ? '' : index + 1} </S.StatusTitle> 
            <S.StatusText> {type.type.name} </S.StatusText>
          </S.StatusLine>
        )
      })}
      <S.PokemonImage src={props?.sprites?.front_default} alt="" />
      <S.ButtonContainer>
        <Button onClick={() => handleFavorite() } loading={false}>
          {isFavorite ?  <MdOutlineCatchingPokemon /> : <CgPokemon /> }
          Capture
        </Button>
      </S.ButtonContainer>
    </S.Container>
  )
}