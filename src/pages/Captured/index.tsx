import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import * as S from './styles';
import { ILocalPokemonProps } from "../../components/molecules/favorited/types";
import { Localhost, listPokemons, onDelete } from "../../service/api";
import { Favorited } from "../../components/molecules/favorited";

export default function Captured() {
  const navigation = useNavigate()

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);
  const [list, setList] = useState<ILocalPokemonProps[]>([] as ILocalPokemonProps[]);

  const handleList = async () => {
    try {
      const data = await listPokemons()
      setLoading(true)
      setList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const data = await onDelete(id)
      setLoading(true)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleList()
  }, [])

  console.log(list)

  return(
    <Container>
      <Header />
      <S.ButtonContainer>
        <Button onClick={() => {navigation('/')}}>Voltar</Button>
      </S.ButtonContainer>
      <S.Content>
        {
          list.map(data => {
            return (
              <div key={data?.id}>
                <button onClick={() => handleDelete(data.id)}>delete</button>
                <Favorited
                  name={data?.name}
                  height={data?.height}
                  weight={data?.weight}
                  type1={data?.type1}
                  type2={data?.type2}
                  id={data?.id}
                  sprite={data?.sprite}
                />
              </div>
            )
          })
        }
      </S.Content>
    </Container>
  )
}