import styled from "@emotion/styled";
import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine
}
//props 데이터(원하는 props만 가져올 때)
export const WineCard = ({wineData} : WineProps) => {
  const { wine, winery, image, location, rating} = wineData;

  return (
    <Container>
      <img src={image}  />
      <h1>
        {wine}
        <Average>{rating.average}</Average>
      </h1>
      <p>{winery}</p>
    </Container>
  )
}

const Container = styled.div`
  padding:1em;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  border-radius: 1em;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
`

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color:white;
  background: #2ac1bc;
  border-radius:3px;
`