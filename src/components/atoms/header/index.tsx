import { MdOutlineCatchingPokemon } from "react-icons/md";
import * as S from './styles';



export const Header = () =>{
  return(
    <S.Container>
      <S.Title>  
        Monte seu time!
      </S.Title>
      <S.Subtitle>
        <MdOutlineCatchingPokemon size={32} />
        Favorite seus pokemons!
        <MdOutlineCatchingPokemon size={32} />
      </S.Subtitle>
    </S.Container>
  )
}