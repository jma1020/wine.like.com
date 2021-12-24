import { Wine } from "../types/Wine";
import { Error ,Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import styled from "@emotion/styled";
import { MEDA_QUERY_END_POINT } from "../constants";


interface WineCardListProps{
    name:string
}

export const WineCardList =({name}:WineCardListProps) =>{

    const {data, error} = useWineData(name)
    
    if(error) return <Error/>
    if(!data) return <Loading />

    return(
        <div>
            <WineTitle>{name} Wine</WineTitle>
            <WineList>
                {data.map((wineData: Wine)=>{
                    return(
                        <WineCard 
                            key={`${name}}-wine-list-${wineData.id}`}
                            wineData={wineData}
                        />
                    )
                })}
            </WineList>
        </div>
    )
}

const WineTitle = styled.h1`
    line-height:180%;
    border-bottom: 1px solid #aaa;
    color:red;
`
const WineList = styled.main`
    display: grid;

    @media (min-width: ${MEDA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width:${MEDA_QUERY_END_POINT.TABLE}){
        grid-template-columns: repeat(4, 1fr);
    }
`