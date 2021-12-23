import styled from "@emotion/styled";
import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine
}
//props 데이터(원하는 props만 가져올 때)
export const WineCard = ({wineData} : WineProps) => {
  const { wine, winery } = wineData;

  return (
    <Container>
      <h1>{wine}</h1>
      <p>{winery}</p>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
`