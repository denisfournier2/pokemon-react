import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import * as S from './styles';
import { ILocalPokemonProps } from "../../components/molecules/favorited/types";
import { Localhost } from "../../service/api";
import { Favorited } from "../../components/molecules/favorited";

export default function Captured() {
  const navigation = useNavigate()

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);
  const [list, setList] = useState<ILocalPokemonProps[]>([] as ILocalPokemonProps[]);

  const handleList = () => {
    setLoading(true);
    Localhost.get(`pokemon`)
      .then((response) => {
        setLoading(false);
        if (response.data.count === 1302) { 
          setError(true); 
          return; 
        }
        setList(response.data);
        setShowPokemon(true);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  };

  const onDelete = (id: number) => {
    setLoading(true);
    Localhost.delete(`pokemon/${id}`)
      .then((response) => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  };

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
      {
        list.map(data => {
          return (
            <Favorited
              key={data?.id}
              name={data?.name}
              height={data?.height}
              weight={data?.weight}
              type1={data?.type1}
              type2={data?.type2}
              id={data?.id}
              sprite={data?.sprite}
              onDelete={onDelete(data?.id)}
            />
          )
        })
      }
    </Container>
  )
}