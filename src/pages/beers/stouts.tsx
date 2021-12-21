import type { NextPage } from "next";
import {Beer} from "../../types/Beer"
import { useBeerData } from "../../hooks/useBeerData";
import { Error, Loading, BeerCard } from "../../components";


const StoutsPage : NextPage =() => {
    const name = 'stouts'
    const {data, error} = useBeerData(name)
    
    if(error) return <Error/>
    if(!data) return <Loading />

    return (
        <div>
            <h1>ale beer</h1>
            <main>
                {data.map((beerData: Beer)=>{
                    return(
                        <BeerCard 
                            key={`${name}-beer-list-${beerData.id}`}
                            beerData={beerData}
                        />
                    )
                })}
            </main>
        </div>
    )
}

export default StoutsPage