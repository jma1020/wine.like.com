import type { NextPage } from "next";
import { WineCardList } from "../../components";

const SparklingPage: NextPage = () => {
    const name = 'sparkling'
    
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}


export default SparklingPage;
