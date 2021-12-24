import { NextPage } from "next";
import { Loading,Error,BeerCard } from ".";
import { useBeerData } from "../hooks/useBeerData"
import { Beer } from "../types/Beer";

interface BeerCardListProps {
    name:string
}

export const BeerCardList =({name}:BeerCardListProps)=>{
    
    const { data, error} = useBeerData(name)
    
    if(error) return <Error />
    if(!data) return <Loading/>

    return(
        <div>
            <h1>안녕하세요</h1>
            <main>
                {data.map((beerData:Beer)=>{
                    return(
                        <BeerCard 
                            key={`beer-list${beerData.id}`}
                            beerData={beerData}
                        />
                    )
                })}
            </main>
        </div>

    )
}
