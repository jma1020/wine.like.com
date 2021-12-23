import type { NextPage } from "next";
import { WineCardList } from "../../components";

const WhitesPage: NextPage = () => {
    const name = 'whites'
    
    return (
        <div>
            <WineCardList name={name} />
        </div>
    )
}


export default WhitesPage;
