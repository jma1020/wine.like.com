import type { NextPage } from "next";
import { Wine } from "../../types/Wine";
import { useWineData } from "../../hooks/useWineData";
import { Error, Loading, WineCard } from "../../components";

// const  fetcher = (...args) =>axios.get(...args).then(res=>res.data);

const PortPage: NextPage = () => {
    const name = 'port'
    const {data, error} = useWineData(name)
    
    if(error) return <Error/>
    if(!data) return <Loading />

    return (
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



export default PortPage;
