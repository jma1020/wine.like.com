import { Wine } from "../types/Wine";
import { Error ,Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import styled from "@emotion/styled";

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
            <main>
                {data.map((wineData: Wine)=>{
                    return(
                        <WineCard 
                            key={`port-wine-list-${wineData.id}`}
                            wineData={wineData}
                        />
                    )
                })}
            </main>
        </div>
    )
}

const WineTitle = styled.h1`
    line-height:180%;
    border-bottom: 1px solid #aaa;
    color:red;
`
