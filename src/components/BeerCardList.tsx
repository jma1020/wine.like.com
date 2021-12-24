import { Loading,Error,BeerCard } from ".";
import { useBeerData } from "../hooks/useBeerData"
import { Beer } from "../types/Beer";
import styled from '@emotion/styled'
import { MEDA_QUERY_END_POINT } from "../constants";

interface BeerCardListProps {
    name:string
}

export const BeerCardList =({name}:BeerCardListProps)=>{
    
    const { data, error} = useBeerData(name)
    
    if(error) return <Error />
    if(!data) return <Loading/>

    return(
        <div>
            <BeerTitle>안녕하세요</BeerTitle>
            <BeerList>
                {data.map((beerData:Beer)=>{
                    return(
                        <BeerCard 
                            key={`beer-list${beerData.id}`}
                            beerData={beerData}
                        />
                    )
                })}
            </BeerList>
        </div>

    )
}

const BeerTitle = styled.h1`
    line-height:180%;
    border-bottom: 1px solid #aaa;
    color:red;
`
const BeerList = styled.main`
    display: grid;

    @media (min-width: ${MEDA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width:${MEDA_QUERY_END_POINT.TABLE}){
        grid-template-columns: repeat(4, 1fr);
    }
`