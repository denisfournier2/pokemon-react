import { useState } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "../../components/atoms/button";
import { Container } from "../../components/atoms/container";
import { Header } from "../../components/atoms/header";
import { Input } from "../../components/atoms/input";
import Toasty from "../../components/atoms/toasty";
import { Pokemon } from "../../components/molecules/pokemon";
import { IPokemonProps } from "../../components/molecules/pokemon/types";
import { Api } from "../../service/api";
import * as S from "./styles";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);
  const [data, setData] = useState<IPokemonProps>({} as IPokemonProps);
  const navigation = useNavigate()

 

  const handleSearch = () => {
    setLoading(true);
    Api.get(`pokemon/${name}`)
      .then((response) => {
        setLoading(false);
        if (response.data.count === 1302) { 
          setError(true); 
          return; 
        }
        setData(response.data);
        setShowPokemon(true);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  };
  return (
    <Container>
      <Header />
      <S.Content>
        <S.InputContainer>
          <Input label="Insert below the pokemon name that you want to search" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button onClick={handleSearch} loading={loading}>
            <div className={`icon-container ${loading ? 'loading' : ''}`}>
              <MdOutlineCatchingPokemon size={30} />
            </div>
            Search
          </Button>
        </S.ButtonContainer>
        {error && (
          <>
            <ToastContainer />
            <Toasty message={`⚠️ Pokemon ${name} not found`} />
          </>
        )} 
        {showPokemon && (
          <Pokemon
            key={data?.id}
            name={data?.name}
            height={data?.height}
            weight={data?.weight}
            types={data?.types}
            url={data?.url}
            id={data?.id}
            sprites={data?.sprites}
          />
        )}
        <S.ButtonContainer>
          <Button onClick={() => navigation('/captured')} >
            Captured Pokemons
            <MdOutlineCatchingPokemon size={30} />
          </Button>
        </S.ButtonContainer>
      </S.Content>
    </Container>
  );
}
