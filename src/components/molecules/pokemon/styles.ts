import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { sizes } from "../../../theme/sizes";
import { fonts } from "../../../theme/fonts";


export const Container = styled.div`
  position: relative;
  width: 25vw;
  height: 20vw;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 4px 4px ${colors.shadow};
  margin: 16px 0 16px 0;
  font-family: ${fonts.heading};
  
  @media (max-width: 1210px) {
    width: 30vw;
    height: 30vw;
  }

  @media (max-width: 840px) {
    width: 40vw;
    height: 40vw;
  }

  @media (max-width: 620px) {
    width: 50vw;
    height: 50vw;
  }

   @media (max-width: 500px) {
    width: 60vw;
    height: 60vw;
  }

   @media (max-width: 380px) {
    width: 90vw;
    height: 90vw;
  }
` 
export const Title = styled.h1`
  color: ${colors.text};
  font-size: ${sizes.subheading};
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`
export const StatusLine = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`
export const StatusTitle = styled.span`
  color: ${colors.text};
  font-size: ${sizes.body};
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
  margin-right: 5px;
  text-align: center;
`
export const StatusText = styled.span`
  color: ${colors.text};
  font-size: ${sizes.body};
  text-align: center;
  margin-bottom: 5px;
  margin-right: 5px;
  text-align: center;
  text-transform: capitalize;
`

export const PokemonImage = styled.img`
  width: 40%;
  height: 40%;
  margin-bottom: 5px;
`

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`