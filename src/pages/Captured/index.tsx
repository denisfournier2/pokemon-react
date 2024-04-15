import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import * as S from './styles';
import { ILocalPokemonProps } from "../../components/molecules/favorited/types";
import { Localhost, listPokemons, onDelete } from "../../service/api";
import { Favorited } from "../../components/molecules/favorited";
import { ToastContainer } from "react-toastify";
import Toasty from "../../components/atoms/toasty";
import { IoMdCloseCircle } from "react-icons/io";

export default function Captured() {
  const navigation = useNavigate()

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
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
    setLoading(true)
    console.log("aaa")
    try {
      const data = await onDelete(id)
      setSuccess(true)
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleList()
  }, [success])

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
                <S.DeleteButton onClick={() => handleDelete(data.id)}><IoMdCloseCircle /></S.DeleteButton>
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
        {error && (
          <>
            <ToastContainer />
            <Toasty message={`⚠️ Pokemon ${name} não pode ser excluído.`} />
          </>
        )}
        {success && (
          <>
            <ToastContainer />
            <Toasty message={`🚀 ${name} foi excluído dos seus favoritos.`} />
          </>
        )} 
      </S.Content>
    </Container>
  )
}