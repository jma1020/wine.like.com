import { Wine } from "../types/Wine";
import { Error ,Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";

interface WineCardListProps{
    name:string
}

export const WineCardList =({name}:WineCardListProps) =>{

    const {data, error} = useWineData(name)
    
    if(error) return <Error/>
    if(!data) return <Loading />

    return(
        <div>
            <h1>port Wine</h1>
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