import { Beer } from '../types/Beer'
import styled from '@emotion/styled'

interface BeerProps {
  beerData: Beer
}


export const BeerCard = ({beerData} : BeerProps) => {
  const { name,price,rating,image } = beerData;
  
  return (
    <Container>
      {/* <img src={image} alt="" /> */}
      <h1>
        {name}
        <Average>{rating.average}  </Average>
      </h1>
      <p>{price}</p>
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