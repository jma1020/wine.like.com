import type { NextPage } from "next";
import { WineCardList } from "../../components";

const RosePage: NextPage = () => {
    const name = 'rose'
    
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}


export default RosePage;
